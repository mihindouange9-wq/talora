import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { getLenis, prefersReducedMotion } from "../lib/motion";
import "./intro.css";

const KEY = "talora-intro";
export const INTRO_EVENT = "talora:intro-done";
export const INTRO_REPLAY_EVENT = "talora:intro-replay";

/** Vrai tant que l'introduction n'a pas été vue dans cette session (lu avant le premier rendu). */
export function introPending() {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  if (window.location.search.includes("nointro")) return false;
  try {
    return sessionStorage.getItem(KEY) !== "1";
  } catch {
    return true;
  }
}

/* Le film de 30 secondes en tête de page : il se joue une fois par session, sans son par défaut
   (le navigateur l'exige), puis se retire en diagonale et le site apparaît. Un bouton permet de passer. */
export default function Intro() {
  const [state, setState] = useState<"playing" | "leaving" | "done">(() => (introPending() ? "playing" : "done"));
  const [muted, setMuted] = useState(true);
  const video = useRef<HTMLVideoElement>(null);

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
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* stockage indisponible */
    }
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
    // si la lecture automatique est refusée ou le fichier absent, on ne bloque pas le site
    const guard = window.setTimeout(() => {
      const v = video.current;
      if (!v || v.readyState < 2 || v.paused) finish();
    }, 4000);
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
        src="/intro/talora-intro.mp4"
        poster="/intro/talora-intro-affiche.jpg"
        autoPlay
        muted={muted}
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
      />
      <div className="intro__bar">
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
