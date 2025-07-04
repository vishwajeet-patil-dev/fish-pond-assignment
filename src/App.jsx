import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";
import AddBackground from "./AddBackground";
import AddFish from "./AddFish";
import AddOverlay from "./AddOverlay";

extend({
  Container,
  Graphics,
  Sprite,
});

export default function App() {
  return (
    <Application resizeTo={window} backgroundColor={"#1099bb"}>
      <AddBackground />
      <AddOverlay />
      <AddFish fishCount={20} />
    </Application>
  );
}
