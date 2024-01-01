import React from "react";

interface PdfViewerProps {
  src: string;
  title: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ src, title }) => {
  return (
    <div className="flex w-full flex-col items-center p-4">
      <h3 className="mb-3 text-lg font-bold sm:text-xl">{title}</h3>
      <div className="w-full overflow-hidden" style={{ paddingBottom: "141%" }}>
        {" "}
        {/* Maintain an aspect ratio for the container */}
        <iframe
          src={src}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          className="rounded-md border-none"
        ></iframe>
      </div>
      <div className="mt-2 flex w-full flex-col items-center sm:flex-row sm:justify-center">
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
