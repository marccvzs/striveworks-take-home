"use client";

import { startTransition, useRef } from 'react';

const UploadButton = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
