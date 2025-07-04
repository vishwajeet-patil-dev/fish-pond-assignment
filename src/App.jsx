import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";
import AddBackground from "./components/AddBackground";
import AddFish from "./components/AddFish";
import AddOverlay from "./components/AddOverlay";
import { useRef } from "react";

extend({
  Container,
  Graphics,
  Sprite,
});

export default function App() {
  const parentRef = useRef(null);
  return (
    <div ref={parentRef} style={{ width: "100vw", height: "100vh" }}>
      <Application resizeTo={parentRef} backgroundColor={"#1099bb"}>
        <AddBackground />
        <AddOverlay />
        <AddFish fishCount={20} />
      </Application>
    </div>
  );
}
