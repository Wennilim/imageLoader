import { useEffect, useState } from "react";

export const ImageLoader = ({
  image,
}: {
  image: { big: string; small: string }[];
}) => {
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

  const handleImageLoad = (index: number) => {
    setLoadedIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  useEffect(() => {
    image.forEach((url) => {
      const img = new Image();
      img.src = url.big;
    });
  }, [image]);

  return (
    <>
      <h1 className="text-4xl font-bold p-8 text-center">My Favorite Images</h1>
      <div className="grid grid-cols-4 gap-4 px-8">
        {image.map((url, index) => (
          <div key={index} className="relative group">
            {/* Blurred image (small) */}
            <img
              src={url.small}
              alt={`Image ${index + 1}`}
              loading="eager"
              className={`w-full aspect-square p-2 object-center object-cover ${
                loadedIndexes.includes(index) ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* High-quality image (big) */}
            <img
              src={url.big}
              alt={`Image ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                loadedIndexes.includes(index) ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => handleImageLoad(index)}
            />
            {!loadedIndexes.includes(index) && (
              <div className="absolute inset-0 bg-gray-300 opacity-30 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
