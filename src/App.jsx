import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";
import PixiScene from "./PixiScene";

extend({
  Container,
  Graphics,
  Sprite,
});

export default function App() {
  return (
    <Application background={"#1099bb"} resizeTo={window} antialias>
      <PixiScene />
    </Application>
  );
}
