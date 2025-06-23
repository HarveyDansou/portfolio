"use client";

import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "./ui/button";
import { downloadFile } from "@/service/fileapi";

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const ResumeBtn = ({ containerStyles, iconStyles }: Props) => {
  const handleDownload = async () => {
    try {
      const blob = await downloadFile();
      const url = window.URL.createObjectURL(blob);
      // const fileName = url.split("/").pop();
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.setAttribute("download", "Harvey Dansou Resume.pdf");
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleDownload}
      className={containerStyles}
    >
      <span>Download CV</span>
      <FiDownloadCloud className={iconStyles} />
    </Button>
  );
};

export default ResumeBtn;
