// components/PdfImageViewer.tsx

import React from "react";
import Image from "next/image";

interface PdfImageViewerProps {
  imageSrc: string; // the path to the image file
  pdfSrc: string; // the path to the PDF file
  title: string;
  altText: string;
}

const PdfImageViewer: React.FC<PdfImageViewerProps> = ({
  imageSrc,
  pdfSrc,
  title,
  altText,
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="mb-3 text-lg font-bold sm:text-xl">{title}</h3>
      <div className="shadow-lg">
        <Image
          src={imageSrc}
          alt={altText}
          width={500} // Set the desired width
          height={707} // Set the height based on the aspect ratio of the image
          layout="intrinsic" // Use "responsive" or "intrinsic" depending on your layout needs
        />
      </div>
      <div className="mt-2 flex flex-col sm:flex-row">
        <a
          href={pdfSrc}
          className="mb-2 font-bold text-rose-700 hover:text-rose-600 sm:mb-0 sm:mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Document
        </a>
        <a
          href={pdfSrc}
          download
          className="font-bold text-rose-700 hover:text-rose-600"
        >
          Download {title}
        </a>
      </div>
    </div>
  );
};

export default PdfImageViewer;
