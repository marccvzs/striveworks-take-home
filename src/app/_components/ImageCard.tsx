import Image from "next/image";

type ImageCardProps = {
  id: number;
  url: string;
  title: string;
  alt: string;
};

const ImageCard = ({
  data,
  height,
  width,
}: {
  data: ImageCardProps;
  height: number;
  width: number;
}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-striveworks-purple rounded-lg hover:opacity-75 min-h-10">
        <h2 className="text-striveworks-purple font-semibold tracking-wide">{data?.title}</h2>
      <Image src={data?.url} height={height} width={width} alt={data?.alt || `User image ${data?.id}`} />
    </div>
  );
};

export default ImageCard;
