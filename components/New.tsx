import React from "react";
import Slider from "react-slick";
import NewItem from "./NewItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface NewProps {
  show?: boolean;
}

const New: React.FC<NewProps> = ({ show = true }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: show ? 2 : 1,
    slidesToScroll: show ? 2 : 1,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        <NewItem />
        <NewItem />
        <NewItem />
        <NewItem />
      </Slider>
    </div>
  );
};

export default New;
