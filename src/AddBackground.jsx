import { useApplication } from "@pixi/react";
import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";

export default function AddBackground() {
  const [texture, setTexture] = useState(Texture.EMPTY);
  const { app } = useApplication();
  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load(
        "https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg"
      ).then((result) => setTexture(result));
    }
  }, [texture]);

  return (
    <pixiSprite
      anchor={0.01}
      texture={texture}
      width={app.canvas.width}
      height={app.canvas.height}
    />
  );
}
