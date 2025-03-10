import { useMapData } from "../hooks/useMapData";

const DetailsTable = () => {
  const { geoJsonData } = useMapData();
  if (!geoJsonData || !geoJsonData.features.length) return <p>No data available</p>;

  const details = geoJsonData.features
    .filter((f) => f.geometry && ["LineString", "MultiLineString"].includes(f.geometry.type))
    .map((feature) => ({
      type: feature.geometry.type,
      length: feature.geometry.coordinates.length + " km",
    }));

  return (
    <table border="1">
      <thead>
        <tr><th>Element Type</th><th>Total Length</th></tr>
      </thead>
      <tbody>
        {details.map((item, index) => (
          <tr key={index}><td>{item.type}</td><td>{item.length}</td></tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailsTable;