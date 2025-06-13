import DeleteButton from "@/app/_components/DeleteButton";
import ImageCard from "@/app/_components/ImageCard";
import { type Photo } from "@/app/_components/ImageContainer";
import { notFound } from "next/navigation";

interface SingleImageResponse {
  message: string;
  success: boolean;
  photo: Photo;
}

const getImage = async (name: string): Promise<SingleImageResponse | null> => {
  const res = await fetch(`http://localhost:3000/api/image/${name}`);

  const data = await res.json();

  return data;
};

export default async function ImagePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  // we would normally santize the param since it is user input
  const { name } = await params;

  const data = await getImage(name);

  if (!data?.success) return notFound();

  return (
    <div className="m-8 p-6">
      <div className="flex flex-col gap-6 w-full">

        {/* Delete is a client component */}
        <DeleteButton id={data?.photo?.id} />

        {/* demonstrates resuability */}
        <ImageCard data={data?.photo} height={500} width={500} />
      </div>
    </div>
  );
}

