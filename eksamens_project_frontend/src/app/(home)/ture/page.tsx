import Container from "@/components/Container";
import ToursList from "@/components/ToursList";
import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const TurePage = () => {

  return (
    <main>
      <section className="relative mb-16">
        <figure className="max-h-[31rem] w-full overflow-hidden">
          <Image className="w-full h-auto object-cover scale-125" src="/banner-ture.jpg" width={2000} height={400} alt="Baggrunds billede for ture" />
        </figure>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <Title className="text-7xl text-white font-bold" text="Ture" />
        </div>
      </section>
      <ToursList />
    </main>
  );
};

export default TurePage;
