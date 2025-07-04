import { useApplication } from "@pixi/react";
import { Assets } from "pixi.js";
import { useEffect, useState } from "react";

export default function AddOverlay() {
  const [backgroundTexture, setBackgroundTexture] = useState(null);
  const { app } = useApplication();
  console.log("the app is", app.screen.height, app.screen.width);
  useEffect(() => {
    const texture = Assets.load(
      "https://pixijs.com/assets/tutorials/fish-pond/wave_overlay.png"
    ).then((texture) => {
      setBackgroundTexture(texture);
    });
  }, []);
  return (
    <pixiSprite
      texture={backgroundTexture}
      anchor={0.01}
      height={app.screen.height}
      width={app.screen.width}
    />
  );
}
