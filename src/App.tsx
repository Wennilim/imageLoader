import { ImageLoader } from "./components/ImageLoader";
// import { ImageOnlyLazy } from "./components/ImageOnlyLazy";
import { LOCAL_IMAGE_URL } from "./data";

export default function App() {
  return (
    <div>
      <ImageLoader image={LOCAL_IMAGE_URL} />
      {/* <ImageOnlyLazy image={LOCAL_IMAGE_URL} /> */}
    </div>
  );
}
