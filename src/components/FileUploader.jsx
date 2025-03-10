import { useMapData } from "../hooks/useMapData";

const FileUploader = () => {
  const { parseKML } = useMapData();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => parseKML(e.target.result);
      reader.readAsText(file);
    }
  };

  return <input type="file" accept=".kml" onChange={handleFileUpload} />;
};

export default FileUploader;