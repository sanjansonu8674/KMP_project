import { useState } from "react";
import { MapDataProvider } from "./hooks/useMapData";
import FileUploader from "./components/FileUploader";
import MapView from "./components/MapView";
import SummaryTable from "./components/SummaryTable";
import DetailsTable from "./components/DetailsTable";

const App = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <MapDataProvider>
      <div>
        <h1>KML File Viewer</h1>
        <FileUploader />
        <MapView />
        <button onClick={() => setShowSummary(!showSummary)}>
          {showSummary ? "Hide Summary" : "Show Summary"}
        </button>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showSummary && <SummaryTable />}
        {showDetails && <DetailsTable />}
      </div>
    </MapDataProvider>
  );
};

export default App;
