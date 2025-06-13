import { redirect } from "next/navigation";
import UploadButton from "./UploadButton";

/**
 * This component take an input from a user. This input should be a file.
 * Submitting the input fires a server component that retrieves the image and displays
 * it to the user.
 * @returns void
 */

const SimpleForm = () => {
  // for demonstration purposes and the existing function of mock api, we can image id is the name

  return (
    <div className="flex flex-row justify-between">
      <form action={async (formData: FormData) => {
        'use server'
        const image = formData.get('image') as string;
        console.log('[+] image: ', parseInt(image, 10));

        redirect(`/image/${image}`)
      }} className="flex w-full gap-4">
        <input
          type="text"
          className="border-4 text-xl text-black p-2 w-1/2"
          placeholder="Search images..."
          id="image"
          name="image"
        />
        <button type="submit" aria-label="Search" className="bg-company-purple uppercase font-semibold p-2 text-white">Search</button>
      </form>
        <UploadButton />
    </div>
  );
};

export default SimpleForm;
