import { useState, createContext, useContext } from "react";
import * as toGeoJSON from "@tmcw/togeojson";



const MapDataContext = createContext();

export const MapDataProvider = ({ children }) => {
  const [geoJsonData, setGeoJsonData] = useState(null);

  const parseKML = (kmlString) => {
    const parser = new DOMParser();
    const kml = parser.parseFromString(kmlString, "text/xml");
    const geoJson = toGeoJSON.kml(kml);
    setGeoJsonData(geoJson);
  };

  return (
    <MapDataContext.Provider value={{ geoJsonData, parseKML }}>
      {children}
    </MapDataContext.Provider>
  );
};

export const useMapData = () => useContext(MapDataContext);