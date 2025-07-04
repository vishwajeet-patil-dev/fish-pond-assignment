import { useApplication } from "@pixi/react";
import { useEffect, useRef } from "react";
import { useAsset } from "../context/assetContext";

export default function AddOverlay() {
  const { app } = useApplication();
  const assets = useAsset();
  const positionRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      positionRef.current.x += 0.3;
      positionRef.current.y += 0.15;
      if (positionRef.current.x > app.screen.width) positionRef.current.x = 0;
      if (positionRef.current.y > app.screen.height) positionRef.current.y = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <pixiSprite
      texture={assets.overlay}
      anchor={0.01}
      height={app.screen.height}
      width={app.screen.width}
    />
  );
}
