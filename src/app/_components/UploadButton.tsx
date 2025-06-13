"use client";

import { useImagesStore } from '@/providers/images-store-provider';
import { startTransition, useRef } from 'react';

const UploadButton = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
const { addToList, addToCount } = useImagesStore((state) => state);

  // handle the file upload on change
  // could use startTransition and a server action here
  // i am just demonstrating variety here as server actions are demonstrated elsewhere in the application
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(async () => {
      const file = e.target.files?.[0];
  
      if (!file || !file?.type?.startsWith('image/')) return;

      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!(data.status === 200)) alert('Oops, there was an issue uploading your image');

      addToList(data.image);
      addToCount();
    });
  };

  return (
    <>
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
    </>
  );
};

export default UploadButton;
