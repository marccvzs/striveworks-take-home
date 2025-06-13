"use client";

import { useState, startTransition, useActionState } from "react";
import { uploadAction } from "../action/uploadAction";

/**
 * This component take an input from a user. This input should be a file name.
 * Submitting the input fires a server component that retrieves the image and displays
 * it to the user.
 * @returns void
 */

const SimpleForm = () => {
  const [imageInput, setImageInput] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [status, action, isPending] = useActionState(uploadAction, null);


  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
        const file = e.target.files?.[0];
    
        if (!file) return
        
        action(file);
    })
  }

  return (
    <form className="flex flex-row w-full gap-4 justify-between">
      <input
        type="input"
        className="border-4 text-xl text-black p-2 w-1/2"
        placeholder="Search images..."
        id="image"
        name="image"
        required
        value={imageInput}
        onChange={(e) => setImageInput(e.target.value)}
      />
      <label
        htmlFor="fileInput"
        className="inline-block bg-striveworks-purple text-white font-semibold cursor-pointer w-fit p-4 uppercase"
      >{isPending ? 'Submitting...': 'Upload'}</label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </form>
  );
};

export default SimpleForm;
