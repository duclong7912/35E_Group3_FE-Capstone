import React from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const HomeCarousel = (props: Props) => {
  const slickSettings: Settings = {
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 8 * 1000,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       arrows: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       arrows: true,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       arrows: true,
    //     },
    //   },
    //   // You can unslick at a given breakpoint now by adding:
    //   // settings: "unslick"
    //   // instead of a settings object
    // ],
  };

  return (
    <Slick {...slickSettings}>
      <div className="w-100 mb-5 home--carousel__item" style={{ height: "700px" }}>
        <img
          className="w-100"
          style={{ objectFit: "cover" }}
          src="./img/carousel-1.png"
          alt="..."
        />
      </div>
      <div className="w-100 mb-5 home--carousel__item" style={{ height: "700px" }}>
        <img
          className="w-100"
          style={{ objectFit: "cover" }}
          src="./img/carousel-2.png"
          alt="..."
        />
      </div>
      <div className="w-100 mb-5 home--carousel__item" style={{ height: "700px" }}>
        <img
          className="w-100"
          style={{ objectFit: "cover" }}
          src="./img/carousel-3.png"
          alt="..."
        />
      </div>
      <div className="w-100 mb-5 home--carousel__item" style={{ height: "700px" }}>
        <img
          className="w-100"
          style={{ objectFit: "cover" }}
          src="./img/carousel-4.png"
          alt="..."
        />
      </div>
      <div className="w-100 mb-5 home--carousel__item" style={{ height: "700px" }}>
        <img
          className="w-100"
          style={{ objectFit: "cover" }}
          src="./img/carousel-5.png"
          alt="..."
        />
      </div>
    </Slick>
  );
};

export default HomeCarousel;
