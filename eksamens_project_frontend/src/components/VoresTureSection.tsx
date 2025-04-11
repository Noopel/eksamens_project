import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const VoresTureSection = () => {
  const tours = [
    {
      image: "moon-btn.jpg",
      text: "Månen",
      id: "617f8116066b123e4c7c941c"
    },
    {
      image: "mars-btn.jpg",
      text: "Mars",
      id: "617f80a6066b123e4c7c941a"
    },
  ];

  return (
    <>
      <section className="flex flex-wrap justify-center gap-x-10 md:gap-y-0 gap-y-12 relative">
        {tours.map((tour) => (
          <Link key={tour.id} href={`/ture/${tour.id}`}>
            <figure key={`${tour.text}${tour.image}`} className="relative top-[-50px] flex justify-center">
              <Image className="hover:shadow-2xl" src={`/${tour.image}`} width={500} height={400} alt={`Billede og knap til turen om ${tour.text}`} />
              <Title className="font-bold text-white absolute bottom-[50px] text-4xl" text={tour.text} />
            </figure>
          </Link>
        ))}
      </section>
      <section className="w-40 mx-auto">
        <Link href={"/ture"}>
          <div className="flex items-center text-center gap-1 justify-center">
            <Title className="hover:underline" text={"Vores ture"} />
            <MdOutlineArrowRightAlt className="text-4xl" />
          </div>
        </Link>
      </section>
    </>
  );
};

export default VoresTureSection;
