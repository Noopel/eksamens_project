"use client";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import Container from "./Container";
import Title from "./ui/Title";

const LightBox = ({ images, baseUrl }: { images: string[]; baseUrl: string }) => {
  const [imageToShow, setImageToShow] = useState<string>("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image: string) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      let nextImage = images[0];
      setImageToShow(nextImage);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      let nextImage = images[images.length - 1];
      setImageToShow(nextImage);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <Container className="my-10">
      <Title className="text-center mb-6 text-6xl font-bold" text="Galleriet" />
      <div className="w-full h-1 bg-lightseagreen mb-6" />
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image, i) => (
          <figure key={`${image}-${i}`} className="md:w-1/5 sm:w-1/3 w-full px-8 sm:px-0 h-[200px] hover:cursor-pointer hover:shadow-2xl">
            <Image
              key={`${image}-${i}`}
              className="w-full h-full scale-100 hover:scale-[102%] transition-transform  object-cover"
              onClick={() => showImage(image)}
              src={`${baseUrl}${image}`}
              width={200}
              height={200}
              alt="Lightbox image"
              unoptimized
            />
          </figure>
        ))}
      </div>

      {lightboxDisplay ? (
        <div className="z-[1] fixed top-0 left-0 w-full h-full bg-black/75 flex items-center justify-between" onClick={hideLightBox}>
          <button className="bg-lightseagreen/50 text-white text-2xl p-4 hover:bg-lightseagreen" onClick={showPrev}>
            ⭠
          </button>
          <figure>
            <Image
              className="w-auto h-[80vh] max-h-[90vw] object-cover"
              src={`${baseUrl}${imageToShow}`}
              alt="Main gallery image"
              width={400}
              height={400}
              unoptimized
            />
          </figure>
          <button className="bg-lightseagreen/50 text-white text-2xl p-4 hover:bg-lightseagreen" onClick={showNext}>
            ⭢
          </button>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default LightBox;
