import { notFound } from "next/navigation";
import ImageCard from "./ImageCard";
import Link from "next/link";

export type Photo = {
  url: string;
  id: string;
  description: string;
  title: string;
  user: number;
};

export interface DataResponse {
  success: boolean;
  message: string;
  total_photos: number;
  photos: Array<Photo>;
}

const getData = async (): Promise<DataResponse | null> => {
  const res = await fetch("http:/localhost:3000/api/images");

  const data = await res.json();

  return data;
};

const ImageContainer = async () => {
  const mockImages = await getData();

  // mockImages is null or undefined, show a not found page to the user
  if (!mockImages?.success) return notFound();

  return (
    <div className="flex flex-col gap-6">
      <span className="text-black font-semibold text-shadow-company-purple text-2xl">
        {`${mockImages?.total_photos || ""} images`}
      </span>
      <ul className="flex flex-row flex-wrap gap-8 items-center">

        {/* iterate over the map and return an array of JSX elements containing the link to the card page and the image card information */}
        {(mockImages?.photos || []).map((img) => (
          <li key={img.id} className="flex-1/3">
            <Link href={`/image/${img?.id}`} className="hover:opacity-75 cursor-pointer">
              <ImageCard data={img} height={200} width={200} />
            </Link>
          </li>
        ))}
    
      </ul>

      {/* A load more button and pagination could be added here in a client component */}
    </div>
  );
};

export default ImageContainer;
