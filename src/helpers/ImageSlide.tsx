import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function ImageSlide() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <Image
        src="/ta.webp"
        alt=""
        width="100%"
        height="100%"
        layout="raw"
        className="h-full w-full rounded-xl object-cover"
      />
      <Image
        src="/wa.webp"
        alt=""
        width="100%"
        height="100%"
        layout="raw"
        className="h-full w-full rounded-xl object-cover"
      />
    </Slider>
  );
}
