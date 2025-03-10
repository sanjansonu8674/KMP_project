import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { useMapData } from "../hooks/useMapData";
import "leaflet/dist/leaflet.css";

const geoJsonStyle = (feature) => ({
  color: feature.geometry.type === "Polygon" ? "blue" : "red",
  weight: 2,
  opacity: 1,
  fillColor: "blue",
  fillOpacity: 0.3,
});

const MapView = () => {
  const { geoJsonData } = useMapData();
  const hasGeoJsonData = geoJsonData && geoJsonData.features.length;

  return (
    <MapContainer center={[36.15, -112.33]} zoom={10} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {!hasGeoJsonData ? (
        <Popup position={[36.15, -112.33]}>No map data available</Popup>
      ) : (
        <>
          <GeoJSON data={geoJsonData} style={geoJsonStyle} />
          {geoJsonData.features.map((feature, index) =>
            feature.geometry && feature.geometry.type === "Point" ? (
              <Marker key={index} position={feature.geometry.coordinates}>
                <Popup>{feature.properties?.name || "No Name"}</Popup>
              </Marker>
            ) : null
          )}
        </>
      )}
    </MapContainer>
  );
};

export default MapView;
