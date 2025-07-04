import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AssetContextWrapper } from "./context/assetContext.jsx";

createRoot(document.getElementById("root")).render(
  <AssetContextWrapper>
    <App />
  </AssetContextWrapper>
);
