import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      name: "Molly Marchand | mmarchand@regisjesuit.com",
      image: "/rj.ico",
      company: "Regis Jesuit Robotics 3729",
      websiteName: "rj3729.com",
      websiteUrl: "https://www.rj3729.com/",
      starRating: 5,
      reviewedOn: "November 15, 2023",
      reviewText:
        "Code Crafty developed a website for Regis Jesuit High School’s  robotics team (RJ3729.com).  David Fales’ attention to detail has created a user-friendly, comprehensive website which allows our team to present itself in a professional manner to our sponsors as well as offering our team members the resources and tutorials that students need to effectively manage our team.  Code Crafty and David Fales will provide excellent service and results for your website needs. ",
      // ... other review properties
    },
    {
      name: "Tyler Orzak | coervercolorado@gmail.com",
      image: "/name.jpeg",
      company: "Coerver Colorado",
      websiteName: "coervercolorado.com",
      websiteUrl: "https://www.coervercolorado.com/",
      starRating: 5,
      reviewedOn: "December 22, 2023",
      reviewText: "Code Crafty built the front end website for Coerver Colorado. This website was able to connect it to our backend servers and get more users to our page. We average around 1,200 users a month and have seen a 20% increase in users since the new website was launched. The site is clean, modern and easy to navigate. We are very happy with the results and would recommend Code Crafty to anyone looking for a new website.
",
      // ... other review properties
    },
  ];
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem src={item} key={index} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined text-3xl">{"<"}</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
              key={index}
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  {index + 1}
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined text-3xl">{">"}</span>
        </button>
      </div>
    </div>
  );
};
