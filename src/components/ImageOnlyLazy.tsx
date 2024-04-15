export const ImageOnlyLazy = ({
  image,
}: {
  image: { big: string; small: string }[];
}) => {
  return (
    <>
      <h1 className="text-4xl font-bold p-8 text-center">My Favorite Images</h1>
      <div className="grid grid-cols-4 gap-4 px-8">
        {image.map((url, index) => (
          <div key={index} className="relative group">
            <img
              src={url.big}
              alt={`Image ${index + 1}`}
              className={`top-0 left-0 w-full h-full`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};
