import { useApplication } from "@pixi/react";
import { Assets } from "pixi.js";
import { useEffect, useRef, useState } from "react";

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

export default function AddFish({ fishCount = 20 }) {
  const { app } = useApplication();
  const [fishData, setFishData] = useState([]);
  const fishRef = useRef([]);

  useEffect(() => {
    Array.from({ length: fishCount }).forEach(() => {
      const randomAsset = assets[Math.floor(Math.random() * assets.length)];

      Assets.load(randomAsset.src).then((texture) => {
        const direction = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 2;
        const turnSpeed = Math.random() - 0.8;
        const x = Math.random() * app.screen.width;
        const y = Math.random() * app.screen.height;
        const scale = 0.5 + Math.random() * 0.2;

        const fish = {
          texture,
          direction,
          speed,
          turnSpeed,
          x,
          y,
          scale,
          rotation: -direction - Math.PI / 2,
        };

        fishRef.current.push(fish);
        setFishData((prev) => [...prev, fish]);
      });
    });
  }, []);

  useEffect(() => {
    const stagePadding = 100;
    const boundWidth = app.screen.width + stagePadding * 2;
    const boundHeight = app.screen.height + stagePadding * 2;

    const interval = setInterval(() => {
      fishRef.current.forEach((fish) => {
        fish.direction += fish.turnSpeed * 0.01;

        fish.x += Math.sin(fish.direction) * fish.speed * 4.5;
        fish.y += Math.cos(fish.direction) * fish.speed * 4.5;

        fish.rotation = -fish.direction - Math.PI / 2;

        if (fish.x < -stagePadding) fish.x += boundWidth;
        if (fish.x > app.screen.width + stagePadding) fish.x -= boundWidth;
        if (fish.y < -stagePadding) fish.y += boundHeight;
        if (fish.y > app.screen.height + stagePadding) fish.y -= boundHeight;
      });

      setFishData([...fishRef.current]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <pixiContainer
      children={<h1>Fish Pond</h1>}
      height={app.screen.height}
      width={app.screen.width}
    >
      {fishData.map((fish, index) => (
        <pixiSprite
          key={index}
          texture={fish.texture}
          anchor={0.5}
          x={fish.x}
          y={fish.y}
          scale={fish.scale}
          rotation={fish.rotation}
          interactive
          pointerdown={() => {
            console.log(`Fish ${index + 1} clicked!`);
          }}
        />
      ))}
    </pixiContainer>
  );
}
