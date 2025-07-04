import { createContext, useContext, useEffect, useState } from "react";
import { assets } from "../constants/assets";
import { Assets } from "pixi.js";

export const AssetContext = createContext();

export const AssetContextWrapper = ({ children }) => {
  const [asset, setAsset] = useState({});

  const loadAssets = async () => {
    const asse = await Assets.load(assets);
    setAsset(asse);
  };

  useEffect(() => {
    loadAssets();
  }, []);

  console.log("the assets are", asset);

  return (
    <AssetContext.Provider value={asset}>{children}</AssetContext.Provider>
  );
};

export const useAsset = () => useContext(AssetContext);
