import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource-variable/onest/wght.css";
import "./styles/global.css";
import App from "./App";

// `?scene` : la scène du film de 30 s (1920 × 1080), capturée image par image par tools/video-render.mjs
const isScene = new URLSearchParams(window.location.search).has("scene");
const Scene = lazy(() => import("./components/Scene"));
if (isScene) document.documentElement.classList.add("scene");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isScene ? (
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
);
