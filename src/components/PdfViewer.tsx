import React from 'react';

interface PdfViewerProps {
  src: string;
  title: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ src, title }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <iframe
        src={src}
        width={`500`}
        height={`742`}
        className="border-none rounded-md"
      ></iframe>
      <div className="mt-2">
        <a
          href={src}
          className="text-rose-700 font-bold hover:text-rose-600 mr-4"
          target="_blank" rel="noopener noreferrer"
        >
          View Document
        </a>
        <a
          href={src}
          download
          className="text-rose-700 font-bold hover:text-rose-600"
        >
          Download {title}
        </a>
      </div>
    </div>
  );
}

export default PdfViewer;
