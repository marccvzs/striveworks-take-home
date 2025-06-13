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
    <div className="p-4 bg-white border border-company-purple rounded-lg hover:opacity-75 min-h-10 h-full">
      <Link href={`/image/${data.id}`} aria-label="Image link" className="flex flex-col items-center ">
        <h2 className="text-company-purple font-semibold tracking-wide p-2 text-center m-4">
          {data?.title}
        </h2>
        <Image
          src={data?.url}
          height={height}
          width={width}
          alt={data?.title || `User image ${data?.id}`}
        />
      </Link>
    </div>
  );
};

export default ImageCard;
