import ImageCard from "./ImageCard";

const images = [
  {
    id: 1,
    url: "/window.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 2,
    url: "/file.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 3,
    url: "/globe.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 4,
    url: "/next.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 5,
    url: "/vercel.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 6,
    url: "/window.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 7,
    url: "/file.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 8,
    url: "/globe.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 9,
    url: "/next.svg",
    title: "Example",
    alt: "Example alt text",
  },
  {
    id: 10,
    url: "/vercel.svg",
    title: "Example",
    alt: "Example alt text",
  },
];

const ImageContainer = () => {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-black font-semibold text-shadow-company-purple text-2xl">
        {`${images.length || ''} images`}
      </span>
      <ul className="flex flex-row flex-wrap gap-8 items-center">

        {/* iterate over the map and return an array of JSX elements containing the image card information */}
        {(images || []).map((img) => (
          <li key={img.id} className="flex-1/3">
            <ImageCard data={img} height={50} width={50} />
          </li>
        ))}

      </ul>
    </div>
  );
};

export default ImageContainer;
