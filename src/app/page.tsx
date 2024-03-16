"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
  };

  return (
    <div
      className={
        "bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 shadow-md"
      }
    >
      <div className="container">
        <div
          style={{
            marginLeft: isDesktopOrLaptop ? "20vw" : isTablet ? "10vw" : "0",
          }}
        >
          <header className="text-white bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 shadow-md">
            <div className="mx-auto max-w-7xl">
              <nav className="flex items-center justify-between p-6 mx-5 md:mx-0">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold hover:text-pink-600">
                    Cappy Land!!
                  </span>
                </div>
                <div className="space-x-4">
                  <p className="text-white hover:text-pink-600">
                    Capybara Capybara Capybara
                  </p>
                </div>
              </nav>
            </div>
          </header>
          <Slider {...settings}>
            {Array.from({ length: 38 }, (_, i) => i + 1).map((imageNumber) => (
              <img
                src={`/slides/${imageNumber}.jpg`}
                alt={`capybara comic ${imageNumber}`}
                style={{ maxHeight: "90vh" }}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
