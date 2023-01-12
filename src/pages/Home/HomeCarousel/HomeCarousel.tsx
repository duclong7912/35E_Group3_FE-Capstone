import React from "react";

type Props = {};

const HomeCarousel = (props: Props) => {
  return (
    <div className="w-100 mb-5" style={{ height: "700px" }}>
      <img
        className="h-100"
        style={{ objectFit: "cover" }}
        src="./img/carousel-1.png"
        alt="..."
      />
    </div>
  );
};

export default HomeCarousel;
