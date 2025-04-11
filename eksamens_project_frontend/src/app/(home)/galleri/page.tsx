import LightBox from "@/components/LightBox";
import React from "react";

const GalleriPage = () => {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg"
  ]
  return <main><LightBox images={images} baseUrl="/galleri/" /></main>;
};

export default GalleriPage;
