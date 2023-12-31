import Image from "next/image";
import Link from "next/link";
import React from "react";

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

  return (
    <div className="carousel-item overflow-hidden" style={{ width: width }}>
      <div></div>
      <article className="my-8 max-w-2xl rounded-lg bg-gray-100 p-4">
        {" "}
        <div className="mb-4 flex items-center">
          {" "}
          <Image
            className="me-4 h-10 w-10 rounded-full"
            src={src.image}
            alt=""
            width={40}
            height={40}
          />{" "}
          <div className="font-medium text-black">
            {" "}
            <p>
              {" "}
              {src.name}{" "}
              <time
                dateTime={src.reviewedOn}
                className="block text-sm text-gray-500 dark:text-gray-500"
              >
                {" "}
                {src.company}{" "}
              </time>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mb-1 flex items-center space-x-1 rtl:space-x-reverse">
          {" "}
          {Array.from({ length: src.starRating }, (_, i) => i).map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              {" "}
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />{" "}
            </svg>
          ))}{" "}
          <Link
            className="ms-2 pl-4 text-sm font-semibold text-blue-600 underline"
            href={src.websiteUrl}
          >
            {" "}
            {src.websiteName}{" "}
          </Link>{" "}
        </div>{" "}
        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          {" "}
          <p>
            {" "}
            Reviewed in Colorado, USA on{" "}
            <time dateTime={src.reviewedOn}> {src.reviewedOn} </time>{" "}
          </p>{" "}
        </footer>{" "}
        <div></div>
        <div className="carousel-item-text">{src.reviewText}</div>
      </article>{" "}
    </div>
  );
};
