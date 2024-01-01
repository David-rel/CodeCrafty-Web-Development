import React from "react";

interface PdfViewerProps {
  src: string;
  title: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ src, title }) => {
  return (
    <div className="flex w-full max-w-md flex-col items-center p-4">
      <h3 className="mb-3 text-lg font-bold md:text-xl">{title}</h3>
      <iframe
        src={src}
        width="100%"
        height="500"
        style={{ minHeight: "300px" }}
        className="rounded-md border-none"
      ></iframe>
      <div className="mt-2 flex flex-col md:flex-row">
        <a
          href={src}
          className="mb-2 font-bold text-rose-700 hover:text-rose-600 md:mb-0 md:mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Document
        </a>
        <a
          href={src}
          download
          className="font-bold text-rose-700 hover:text-rose-600"
        >
          Download {title}
        </a>
      </div>
    </div>
  );
};

export default PdfViewer;
