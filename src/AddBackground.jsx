import { useApplication } from "@pixi/react";
import { useAsset } from "./context/assetContext";

export default function AddBackground() {
  const assets = useAsset();
  const { app } = useApplication();
  return (
    <pixiSprite
      texture={assets?.background}
      anchor={0.01}
      height={app.screen.height}
      width={app.screen.width}
    />
  );
}
