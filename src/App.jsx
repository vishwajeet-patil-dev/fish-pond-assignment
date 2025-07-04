import { Application, extend, useApplication } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";
import AddBackground from "./AddBackground";
import AddFish from "./AddFish";

extend({
  Container,
  Graphics,
  Sprite,
});
export default function App() {
  //   const { app } = useApplication();
  return (
    <Application backgroundColor={"1099bb"} resizeTo={window}>
      <AddBackground />
      <AddFish />
    </Application>
  );
}
