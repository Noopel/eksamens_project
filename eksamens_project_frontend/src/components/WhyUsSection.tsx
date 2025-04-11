"use client";
import Image from "next/image";
import React from "react";
import Loader from "./Loader";
import Error from "./Error";
import Title from "./ui/Title";
import { useSpacecraftQuery } from "@/hooks/queries/useSpacecraftQuery";
import parse from "html-react-parser";
import Container from "./Container";

const WhyUsSection = () => {
  const { data, isError, isLoading } = useSpacecraftQuery();

  return (
    <Container className="flex flex-wrap md:flex-nowrap justify-between mt-40 mb-20">
      <figure className="md:w-[47%] w-full">
        <Image src={"/om-os.jpg"} width={1000} height={500} alt="Billede fra rummet for Om Os" />
      </figure>
      <section className="md:w-[45%] w-full flex flex-col gap-10 my-auto">
        {isLoading && <Loader />}
        {isError && <Error />}
        {data && (
          <>
            <Title className="text-6xl font-bold" text="Hvorfor vælge os" />

            <div className="flex flex-wrap gap-y-3 justify-end">
              <Title className="w-full text-lightseagreen uppercase" text={data.title} />
              <div className="w-1/2 h-1 bg-lightseagreen" />
              <div className="w-1/2 h-[0.175rem] mt-auto bg-neutral-200" />
            </div>

            <div className="text-lg">{parse(data.content)}</div>
          </>
        )}
      </section>
    </Container>
  );
};

export default WhyUsSection;
