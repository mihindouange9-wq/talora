import { useEffect, useRef, useState } from "react";
import { Captions, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { getLenis } from "../lib/motion";
import "./intro.css";

export const INTRO_EVENT = "talora:intro-done";
export const INTRO_REPLAY_EVENT = "talora:intro-replay";

/** Le film ouvre chaque visite et chaque rafraîchissement (demande du client) ; `?nointro` le saute pour les tests. */
export function introPending() {
  if (typeof window === "undefined") return false;
  return !window.location.search.includes("nointro");
}

/** Deux encodages du même film : 1080p sur grand écran, 720p sur téléphone ou connexion économe. */
function pickSource() {
  if (typeof window === "undefined") return "/intro/talora-intro-720.mp4";
  const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };
  const slow = Boolean(nav.connection?.saveData) || /(^|\b)(slow-2g|2g|3g)$/.test(nav.connection?.effectiveType ?? "");
  const small = Math.max(window.innerWidth, window.innerHeight) < 1100;
  return slow || small ? "/intro/talora-intro-720.mp4" : "/intro/talora-intro-1080.mp4";
}

/* Le film de 30 secondes en tête de page : il se joue à chaque ouverture, sans son par défaut
   (le navigateur l'exige), puis se retire en diagonale et le site apparaît. Un bouton permet de passer ;
   en mouvement réduit, la lecture reste possible mais rien d'autre ne bouge. */
export default function Intro() {
  const [state, setState] = useState<"playing" | "leaving" | "done">(() => (introPending() ? "playing" : "done"));
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [captions, setCaptions] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const [source] = useState(pickSource);

  // sous-titres : la piste est cachée par défaut, un bouton l'affiche
  useEffect(() => {
    const track = video.current?.textTracks?.[0];
    if (track) track.mode = captions ? "showing" : "hidden";
  }, [captions, state]);

  useEffect(() => {
    if (state === "done") return;
    document.documentElement.classList.add("intro-active");
    getLenis()?.stop();
    return () => {
      document.documentElement.classList.remove("intro-active");
    };
  }, [state]);

  // « Revoir le film » : le calque revient, la lecture repart du début
  useEffect(() => {
    const replay = () => {
      setMuted(false);
      setState("playing");
      window.setTimeout(() => {
        const v = video.current;
        if (v) {
          v.currentTime = 0;
          v.muted = false;
          v.play().catch(() => {});
        }
      }, 50);
    };
    window.addEventListener(INTRO_REPLAY_EVENT, replay);
    return () => window.removeEventListener(INTRO_REPLAY_EVENT, replay);
  }, []);

  const finish = () => {
    if (state !== "playing") return;
    setState("leaving");
    window.setTimeout(() => {
      setState("done");
      getLenis()?.start();
      window.dispatchEvent(new CustomEvent(INTRO_EVENT));
    }, 950);
  };

  useEffect(() => {
    if (state !== "playing") return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && finish();
    window.addEventListener("keydown", onKey);
    // si la lecture automatique est refusée ou le fichier absent, on ne bloque pas le site ; un film qui
    // se charge lentement attend simplement, l'affiche restant visible
    video.current?.play().catch((err: unknown) => {
      if (err instanceof DOMException && err.name === "NotAllowedError") finish();
    });
    const guard = window.setTimeout(() => {
      const v = video.current;
      if (!v || v.error || v.readyState === 0) finish();
    }, 12000);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(guard);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (state === "done") return null;

  return (
    <div className={`intro ${state === "leaving" ? "is-leaving" : ""}`} role="dialog" aria-label="Introduction vidéo de TALORA">
      <video
        ref={video}
        className="intro__video"
        src={source}
        poster="/intro/talora-intro-affiche.jpg"
        autoPlay
        muted={muted}
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      >
        <track kind="captions" src="/intro/talora-intro.fr.vtt" srcLang="fr" label="Français" />
      </video>
      <div className="intro__bar">
        <button
          type="button"
          className="intro__btn"
          onClick={() => {
            const v = video.current;
            if (!v) return;
            if (v.paused) v.play().catch(() => {});
            else v.pause();
          }}
          aria-label={paused ? "Reprendre la lecture" : "Mettre en pause"}
        >
          {paused ? <Play size={18} /> : <Pause size={18} />}
          <span>{paused ? "Lecture" : "Pause"}</span>
        </button>
        <button type="button" className="intro__btn" onClick={() => setCaptions((c) => !c)} aria-pressed={captions} aria-label="Sous-titres">
          <Captions size={18} />
          <span>Sous-titres</span>
        </button>
        <button
          type="button"
          className="intro__btn"
          onClick={() => {
            const v = video.current;
            setMuted((m) => {
              if (v) v.muted = !m ? true : false;
              return !m;
            });
          }}
          aria-pressed={!muted}
          aria-label={muted ? "Activer le son" : "Couper le son"}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          <span>{muted ? "Son" : "Muet"}</span>
        </button>
        <button type="button" className="intro__btn intro__btn--skip" onClick={finish}>
          Passer l'introduction
        </button>
      </div>
    </div>
  );
}
