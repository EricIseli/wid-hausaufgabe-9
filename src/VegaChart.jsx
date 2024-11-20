import { VegaLite } from "react-vega";
import spec from "./CarsHeatmap.json"; // Importiere Cars.json, da beide Dateien im gleichen Ordner sind

const VegaChart = () => {
  return (
    <div>
      <h2>Cars</h2>
      <VegaLite spec={spec} />
    </div>
  );
};

export default VegaChart;
