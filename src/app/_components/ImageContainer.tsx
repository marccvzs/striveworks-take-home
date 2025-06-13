import { notFound } from "next/navigation";
import ImageCount from "./ImageCount";
import ImagesList from "./ImagesList";

export type Photo = {
  url: string;
  id: number;
  description: string;
  title: string;
};

export interface DataResponse {
  success: boolean;
  message: string;
  total_photos: number;
  photos: Array<Photo>;
}

export const getData = async (): Promise<DataResponse | null> => {
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
      <ImageCount countToSet={mockImages.total_photos} />
      <ImagesList images={mockImages.photos} />

      {/* A load more button and pagination could be added here in a client component */}
    </div>
  );
};

export default ImageContainer;
