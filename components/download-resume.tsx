"use client";

import { DownloadIcon } from "@radix-ui/react-icons";

const DownloadResumeButton = () => {

  const handleResumeDownload = () => {
    const fileUrl = '/Abhishek_Kumar_Resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Abhishek_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleResumeDownload} className="inline-flex w-fit h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400
    mx-auto sm:mx-0 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <DownloadIcon className="mr-2" /> Download Resume
    </button>
  )
}

export default DownloadResumeButton;