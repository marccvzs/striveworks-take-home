import Image from "next/image";
import type { Photo } from "./ImageContainer";
import Link from "next/link";

const ImageCard = ({
  data,
  height,
  width,
}: {
  data: Photo;
  height: number;
  width: number;
}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-company-purple rounded-lg  min-h-10 h-full">
      <h2 className="text-company-purple font-semibold tracking-wide p-2 text-center m-4">
        {data?.title}
      </h2>
      <Image
        src={data?.url}
        height={height}
        width={width}
        alt={data?.title || `User image ${data?.id}`}
      />
    </div>
  );
};

export default ImageCard;
