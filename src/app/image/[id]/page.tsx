import ImageCard from "@/app/_components/ImageCard";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    // mock get single image

    const image =   {
        id: 1,
        url: "/window.svg",
        title: "Example",
        alt: "Example alt text",
    };

    return (
        <div className="m-8 p-6">
            {/* demonstrates resuability */}
            <ImageCard data={image} height={150} width={150} />
        </div>
    )
}
