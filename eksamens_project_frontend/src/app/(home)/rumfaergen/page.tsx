import SpaceshipGallery from "@/components/SpaceshipGallery";
import Title from "@/components/ui/Title";
import WhyUsSection from "@/components/WhyUsSection";
import Image from "next/image";
import React from "react";

const RumfaergenPage = () => {
  return (
    <main>
      <section className="relative mb-16">
        <figure className="max-h-[31rem] w-full overflow-hidden">
          <Image
            className="w-full h-auto object-cover scale-125"
            src="/banner-spaceship.jpg"
            width={2000}
            height={400}
            alt="Baggrunds billede for rumfærgen"
          />
        </figure>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <Title className="text-7xl text-white font-bold" text="Rumfærgen" />
        </div>
      </section>
      <WhyUsSection />
      <SpaceshipGallery />
    </main>
  );
};

export default RumfaergenPage;
