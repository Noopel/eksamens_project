"use client";
import React, { useState } from "react";
import SlideshowInfinite from "./ui/slideshow/SlideshowInfinite";
import Button from "./Button";
import { useGalleryQuery } from "@/hooks/queries/useGalleryQuery";
import Loader from "./Loader";
import Error from "./Error";

const SpaceshipGallery = () => {
  const { data, isLoading, isError } = useGalleryQuery();
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      {data && (
        <>
          <section className="w-full hidden justify-between mb-20 sm:flex">
            {data.map((galleryData) => (
              <figure key={galleryData._id} className="w-[23.5%]">
                <img className="h-auto w-full" src={`http://localhost:4444/images/gallery/${galleryData.image}`} alt={galleryData.imagetext} />
              </figure>
            ))}
          </section>
          <section className="sm:hidden h-auto relative">
            <SlideshowInfinite index={index} className="w-full flex justify-between mb-20">
              {data.map((galleryData) => (
                <figure key={galleryData._id} className="w-full">
                  <img className="h-auto w-full" src={`http://localhost:4444/images/gallery/${galleryData.image}`} alt={galleryData.imagetext} />
                </figure>
              ))}
            </SlideshowInfinite>
            <Button
              className="absolute top-[42.5%] left-0 bg-seasalt opacity-35 hover:opacity-80 text-black"
              onClick={() => {
                let newIndex = index - 1;
                if (newIndex < 0) {
                  newIndex = data.length - 1;
                }
                setIndex(newIndex);
              }}
            >
              {"<"}
            </Button>
            <Button
              className="absolute top-[42.5%] right-0 bg-seasalt opacity-35 hover:opacity-80 text-black"
              onClick={() => {
                let newIndex = index + 1;
                if (newIndex > data.length - 1) {
                  newIndex = 0;
                }
                setIndex(newIndex);
              }}
            >
              {">"}
            </Button>
          </section>
        </>
      )}
    </>
  );
};

export default SpaceshipGallery;
