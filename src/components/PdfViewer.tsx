import React from "react";

interface PdfViewerProps {
  src: string;
  title: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ src, title }) => {
  return (
    <div className="flex w-full flex-col items-center p-4">
      <h3 className="mb-3 text-center text-lg font-bold sm:text-xl">{title}</h3>
      <div className="aspect-w-16 aspect-h-9 w-full">
        {" "}
        {/* This will maintain a 16:9 aspect ratio */}
        <iframe
          src={src}
          frameBorder="0"
          className="h-full w-full rounded-md border-none"
        ></iframe>
      </div>
      <div className="mt-2 flex w-full flex-col sm:flex-row">
        <a
          href={src}
          className="mb-2 font-bold text-rose-700 hover:text-rose-600 sm:mb-0 sm:mr-4"
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
