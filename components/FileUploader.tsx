"use client";
import { uploadFile } from "@/service/fileapi";
import { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState<File>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.append("file", file);
      const response = await uploadFile(data);
      console.log("Response ", response);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" onChange={(e) => setFile(e.target?.files?.[0])} />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default FileUploader;
