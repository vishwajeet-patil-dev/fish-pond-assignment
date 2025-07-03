import Background from "./Background";
import Displacement from "./Displacement";
import Fishes from "./Fishes";
import WaterOverlay from "./WaterOverlay";

export default function PixiScene() {
  const fishTextures = ["fish1", "fish2", "fish3", "fish4", "fish5"];
  return (
    <>
      <Background />
      <Fishes fishTextures={fishTextures} />
      <WaterOverlay />
      <Displacement />
    </>
  );
}
