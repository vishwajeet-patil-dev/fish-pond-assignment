import { useApplication } from "@pixi/react";
import { Assets } from "pixi.js";
import { useEffect, useState } from "react";
export default function AddFish() {
  const assets = [
    {
      alias: "fish1",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish1.png",
    },
    {
      alias: "fish2",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish2.png",
    },
    {
      alias: "fish3",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish3.png",
    },
    {
      alias: "fish4",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish4.png",
    },
    {
      alias: "fish5",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish5.png",
    },
  ];
  const [fish, setFish] = useState([]);
  const { app } = useApplication();
  useEffect(() => {
    assets.map(({ src, alias }) => {
      Assets.load(src).then((result) => {
        const newFish = {
          texture: result,
          alias: alias,
          x: Math.random() * app.canvas.width,
          y: Math.random() * app.canvas.height,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
        };
        setFish((prev) => [...prev, newFish]);
      });
    });
  }, []);
  return (
    <>
      {fish.length
        ? fish.map((fishItem, index) => (
            <pixiSprite
              key={index}
              anchor={0.1}
              texture={fishItem.texture}
              x={fishItem.x}
              y={fishItem.y}
            />
          ))
        : null}
    </>
  );
}
