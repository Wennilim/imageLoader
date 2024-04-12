import { ImageLoader } from "./components/ImageLoader";
import { LOCAL_IMAGE_URL } from "./data";

export default function App() {
  return (
    <div>
      <ImageLoader image={LOCAL_IMAGE_URL} />
    </div>
  );
}
