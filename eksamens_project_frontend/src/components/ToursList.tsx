"use client";
import { useToursQuery } from "@/hooks/queries/useToursQuery";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./ui/Title";
import parse from "html-react-parser";
import Link from "next/link";
import Loader from "./Loader";
import Error from "./Error";



const ToursList = () => {
  const { data, isLoading, isError } = useToursQuery();

  return (
    <Container className="mb-40 mt-32">
      <section className="flex flex-col gap-[4rem]">
        {isLoading && <Loader />}
        {isError && <Error />}
        {data &&
          data.map((tourData) => (
            <div className="flex flex-wrap" key={tourData._id}>
              <figure className="w-full md:w-1/2">
                <img className="h-auto w-full" src={`http://localhost:4444/images/tours/${tourData.image1}`} />
              </figure>
              <section className="w-full md:w-1/2 py-10 border-neutral-200 border-[2px] relative flex justify-center ps-[5%] pe-[10%]  flex-col">
                <div className="absolute top-0 right-0 py-8 px-6 [] text-3xl text-white bg-lightseagreen rounded-bl-3xl uppercase">
                    {tourData.price}
                </div>
                <Title className="mb-2" text={tourData.title} />
                <div className="opacity-50 text-xl mb-2">{parse(tourData.content.split("</p>")[0])}</div>
                <div className="opacity-90 text-xl mb-8">{`Næste afrejse den ${new Date(tourData.spacelaunch).toLocaleDateString()}`}</div>
                <Link href={`/ture/${tourData._id}`}>
                  <button className="py-4 px-16 hover:underline text-xl border-[0.2rem] border-black">Se mere</button>
                </Link>
              </section>
            </div>
          ))}
      </section>
    </Container>
  );
};

export default ToursList;
