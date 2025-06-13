"use client";

import { useState, startTransition, useActionState, useRef } from "react";
import { uploadAction } from "../action/uploadAction";

/**
 * This component take an input from a user. This input should be a file.
 * Submitting the input fires a server component that retrieves the image and displays
 * it to the user.
 * @returns void
 */

const SimpleForm = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imageInput, setImageInput] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [status, action, isPending] = useActionState(uploadAction, null);

  // handle the file upload on change 
  // could use startTransition and a server action here
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(async () => {
      const file = e.target.files?.[0];

      if (!file) return;

      const formData = new FormData();
      formData.set("image", file);

      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      // action(formData);
    });
  };

  return (
    <div className="flex flex-row justify-between">
      <input
        type="input"
        className="border-4 text-xl text-black p-2 w-1/2"
        placeholder="Search images..."
        id="image"
        name="image"
        value={imageInput}
        onChange={(e) => setImageInput(e.target.value)}
      />
      <input
        id="fileInput"
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <button
        className="bg-company-purple px-4 py-2 text-white font-semibold shadow-xl uppercase cursor-pointer hover:opacity-50 active:opacity-75"
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default SimpleForm;
