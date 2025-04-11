"use client";
import React, { useEffect, useState } from "react";
import Slideshow from "./ui/slideshow/Slideshow";
import { useBannerQuery } from "@/hooks/queries/useBannerQuery";
import Container from "./Container";
import Title from "./ui/Title";
import LargeTitle from "./ui/LargeTitle";
import Loader from "./Loader";
import Error from "./Error";

const SpaceSlideshow = () => {
  const [index, setIndex] = useState<number>(0);
  const { data, isError, isLoading } = useBannerQuery();

  return (
    <article className="w-full h-[740px] relative">
      {
        isLoading && <Loader />
      }
      {
        isError && <Error />
      }
      <Slideshow index={index} setIndex={setIndex} autoplay transitionDuration={1} slideDuration={5} verticalMode>
        {data &&
          data.map((bannerData, i) => (
            <figure key={bannerData._id} className="w-full h-full relative">
              <img className="w-full h-full object-cover" src={`http://localhost:4444/images/banner/${bannerData.image}`} alt="Image for banner" />
              <div className="absolute top-0 left-0 w-full h-full">
                <Container className={`h-full flex flex-col justify-center text-white transition-opacity duration-[3000ms] ${i === index ? "opacity-100" : "opacity-0"}`}>
                  <Title text={bannerData.title} />
                  <LargeTitle text={bannerData.content} />
                </Container>
              </div>
            </figure>
          ))}
      </Slideshow>
      <section className="absolute right-[6%] bottom-[44%] flex flex-col gap-4">
        {data &&
          data.map((_d, i) => (
            <button
              key={`slideshowbutton-${i}`}
              className={`w-4 h-4 transition-colors bg-lightseagreen opacity-80 ${i != index ? "bg-neutral-500" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
      </section>
    </article>
  );
};

export default SpaceSlideshow;
