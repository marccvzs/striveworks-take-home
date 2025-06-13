import ImageContainer from "./_components/ImageContainer";

export default function Home() {
  // Home should render from the server. Only components needing interaction should render on the client
  
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <ImageContainer />
      </main>
    </div>
  );
}
