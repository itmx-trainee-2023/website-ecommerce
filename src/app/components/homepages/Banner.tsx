/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import imgbn from "../../../../public/image/Homepage/Banner.png";
import Carousel from "./Carousel";

const images = [
  '/image/Homepage/Banner.png',
  '/image/Homepage/Banner.png',
  '/image/Homepage/Banner.png',
];
function Banner() {
  return (
    <><div className="flex justify-center ">
      <div className="w-4/5">
      <Carousel images={images} />
    </div>
    </div>
    
    </>
  );
}

export default Banner;
