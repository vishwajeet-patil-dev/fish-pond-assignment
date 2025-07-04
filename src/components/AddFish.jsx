import { useApplication } from "@pixi/react";
import { useEffect, useRef, useState } from "react";
import { useAsset } from "../context/assetContext";

const fishAssets = ["fish1", "fish2", "fish3", "fish4", "fish5"];

export default function AddFish({ fishCount = 20 }) {
  const { app } = useApplication();
  const [fishData, setFishData] = useState([]);
  const fishRef = useRef([]);
  const assets = useAsset();

  useEffect(() => {
    Array.from({ length: fishCount }).forEach(() => {
      const randomAsset =
        fishAssets[Math.floor(Math.random() * fishAssets.length)];
      const texture = assets[randomAsset];
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
  }, [assets]);

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
    <pixiContainer height={app.screen.height} width={app.screen.width}>
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
