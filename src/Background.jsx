import { useApplication } from "@pixi/react";
import { Texture } from "pixi.js";

export default function Background() {
  const app = useApplication();
  const texture = Texture.from("background");
  const { width, height } = app.screen || { width: 800, height: 600 };

  return (
    <pixiSprite
      texture={texture}
      anchor={0.5}
      x={width / 2}
      y={height / 2}
      width={width > height ? width * 1.2 : undefined}
      height={width <= height ? height * 1.2 : undefined}
      scale={{
        x: width > height ? 1 : undefined,
        y: width <= height ? 1 : undefined,
      }}
    />
  );
}
