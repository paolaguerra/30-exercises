import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide01 from "./img/1.jpeg";

export const GalleriaDeFoto = () => {
  return (
    <Carousel>
      <div>
        <img src={slide01} />
        <p className="legend">Ahsoka 1</p>
      </div>
    </Carousel>
  );
};
