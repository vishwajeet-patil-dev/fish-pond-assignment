import { useApplication, useTick } from "@pixi/react";
import { Texture } from "pixi.js";
import { useRef } from "react";

export default function WaterOverlay() {
  const app = useApplication();
  const tex = Texture.from("overlay");
  const tilingRef = useRef();

  useTick((delta) => {
    if (tilingRef.current) {
      tilingRef.current.tilePosition.x -= delta;
      tilingRef.current.tilePosition.y -= delta;
    }
  });

  return (
    <pixiTilingSprite
      ref={tilingRef}
      texture={tex}
      //   width={app.screen.width}
      //   height={app.screen.height}
    />
  );
}
