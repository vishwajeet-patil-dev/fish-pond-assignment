import { useApplication } from "@pixi/react";
import { DisplacementFilter, Sprite, Texture } from "pixi.js";
import { useEffect } from "react";

export default function Displacement() {
  const dispTex = Texture.from("displacement");
  dispTex.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  const sprite = new Sprite(dispTex);
  const filter = new DisplacementFilter({ sprite, scale: 50 });
  const app = useApplication();
  useEffect(() => {
    app.stage.filters = [filter];
  }, [app, filter]);
  return null;
}
