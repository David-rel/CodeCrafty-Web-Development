import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface CarouselItemProps {
  src: {
    image: string;
    name: string;
    reviewedOn: string;
    company: string;
    starRating: number;
    websiteUrl: string;
    websiteName: string;
    reviewText: string;
  };
  width: string | number;
}

export const CarouselItem = ({ src, width }: CarouselItemProps) => {
  const [style, setStyle] = useState({});
  const [nameFontSize, setNameFontSize] = useState("1rem"); // Default font size for name

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        // For smaller screens
        setStyle({
          height: "auto", // Height auto for variable content
          fontSize: "0.8rem", // Smaller font size for smaller screens
        });
        setNameFontSize("0.7rem"); // Even smaller font size for the name
      } else {
        // For larger screens
        setStyle({
          height: "400px", // Fixed height for larger screens
          fontSize: "1rem", // Default font size
        });
        setNameFontSize("1rem"); // Reset to default font size for the name
      }
    }

    // Initialize the style
    handleResize();

    // Update style upon window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="carousel-item overflow-hidden" style={{ ...style, width }}>
      <article
        className="my-8 max-w-2xl rounded-lg bg-gray-100 p-4"
        style={style}
      >
        <div className="mb-4 flex items-center">
          <Image
            className="me-4 h-10 w-10 rounded-full"
            src={src.image}
            alt=""
            width={40}
            height={40}
          />
          <div>
            <p
              className="font-medium text-black"
              style={{ fontSize: nameFontSize }}
            >
              {src.name}
              <time
                dateTime={src.reviewedOn}
                className="block text-sm text-gray-500 dark:text-gray-500"
              >
                {src.company}
              </time>
            </p>
          </div>
        </div>
        <div className="mb-1 flex items-center space-x-1 rtl:space-x-reverse">
          {Array.from({ length: src.starRating }, (_, i) => i).map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <Link href={src.websiteUrl} legacyBehavior>
            <a
              className="ms-2 pl-4 text-sm font-semibold text-blue-600 underline"
              style={style}
            >
              {src.websiteName}
            </a>
          </Link>
        </div>
        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          <p style={style}>
            Reviewed in Colorado, USA on{" "}
            <time dateTime={src.reviewedOn}>{src.reviewedOn}</time>
          </p>
        </footer>
        <div className="carousel-item-text" style={style}>
          {src.reviewText}
        </div>
      </article>
    </div>
  );
};
