import { useApplication, useTick } from "@pixi/react";
import { useEffect, useRef } from "react";

export default function Fishes({ fishTextures }) {
  const app = useApplication();
  const containerRef = useRef();
  const fishes = useRef([]);

  useEffect(() => {
    const fishCount = 20;
    const base = app.screen;
    for (let i = 0; i < fishCount; i++) {
      const tex = fishTextures[i % fishTextures.length];
      const fish = Sprite.from(tex);
      fish.anchor.set(0.5);
      fish.direction = Math.random() * Math.PI * 2;
      fish.speed = 2 + Math.random() * 2;
      fish.turnSpeed = Math.random() - 0.8;
      fish.x = Math.random() * base.width;
      fish.y = Math.random() * base.height;
      fish.scale.set(0.5 + Math.random() * 0.2);
      containerRef.current.addChild(fish);
      fishes.current.push(fish);
    }
  }, [app, fishTextures]);

  useTick((delta) => {
    const pad = 100;
    const bW = app.screen.width + pad * 2;
    const bH = app.screen.height + pad * 2;
    fishes.current.forEach((f) => {
      f.direction += f.turnSpeed * 0.01;
      f.x += Math.sin(f.direction) * f.speed;
      f.y += Math.cos(f.direction) * f.speed;
      f.rotation = -f.direction - Math.PI / 2;
      if (f.x < -pad) f.x += bW;
      if (f.x > app.screen.width + pad) f.x -= bW;
      if (f.y < -pad) f.y += bH;
      if (f.y > app.screen.height + pad) f.y -= bH;
    });
  });

  return <pixiContainer ref={containerRef} />;
}
