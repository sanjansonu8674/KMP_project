import { useMapData } from "../hooks/useMapData";

const SummaryTable = () => {
  const { geoJsonData } = useMapData();
  if (!geoJsonData || !geoJsonData.features.length) return <p>No data available</p>;

  const elementCounts = {};
  
  geoJsonData.features.forEach((feature, index) => {
    if (!feature.geometry || !feature.geometry.type) {
      console.warn(`Feature at index ${index} is missing geometry:`, feature);
    } else {
      const type = feature.geometry.type;
      elementCounts[type] = (elementCounts[type] || 0) + 1;
    }
  });

  return (
    <table border="1">
      <thead>
        <tr><th>Element Type</th><th>Count</th></tr>
      </thead>
      <tbody>
        {Object.entries(elementCounts).map(([type, count]) => (
          <tr key={type}><td>{type}</td><td>{count}</td></tr>
        ))}
      </tbody>
    </table>
  );
};

export default SummaryTable;