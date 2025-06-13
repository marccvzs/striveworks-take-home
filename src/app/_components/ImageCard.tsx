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
    <div className="flex flex-col gap-2 items-center p-4 bg-white border border-company-purple rounded-lg  min-h-10 h-full">
      <h2 className="text-company-purple font-semibold tracking-wide p-2 text-center m-2 text-2xl">
        {data?.title}
      </h2>
      <h3 className="text-company-purple text-xl m-1">{`Name: ${data?.id}`}</h3>
      <Image
        src={data?.url}
        height={height}
        width={width}
        alt={data?.title || `User image ${data?.id}`}
        priority
      />
    </div>
  );
};

export default ImageCard;
