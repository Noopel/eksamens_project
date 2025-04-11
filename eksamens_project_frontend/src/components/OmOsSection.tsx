import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import { useAboutQuery } from "@/hooks/queries/useAboutQuery";
import Link from "next/link";
import Button from "./Button";
import parse from "html-react-parser";
import Loader from "./Loader";
import Error from "./Error";

const OmOsSection = () => {
  const { data, isError, isLoading } = useAboutQuery();

  return (
    <section className="flex md:flex-row flex-col md:items-start items-center md:justify-between mt-60">
      <figure className="md:w-[47%] w-11/12">
        <Image src={"/om-os.jpg"} width={1000} height={500} alt="Billede fra rummet for Om Os" />
      </figure>
      <section className="md:w-[45%] w-11/12 flex flex-col gap-10 my-auto md:items-start items-center">
        {isLoading && <Loader />}
        {isError && <Error />}
        {data && (
          <>
            <Title className="text-5xl font-bold" text="Lidt om os" />

            <div className="flex flex-wrap gap-y-3 justify-end w-full">
              <div className="w-full h-1 bg-lightseagreen md:hidden" />
              <Title className="w-full text-lightseagreen uppercase md:text-left text-center md:text-2xl text-4xl" text={data.title} />
              <div className="md:w-1/2 w-full h-1 bg-lightseagreen" />
              <div className="w-1/2 md:block hidden h-[0.175rem] mt-auto bg-neutral-200" />
            </div>

            <div className="text-lg md:text-left text-center">{parse(data.content)}</div>

            <Link href={"/kontakt"}>
              <Button className="px-16">Kontakt os</Button>
            </Link>
          </>
        )}
      </section>
    </section>
  );
};

export default OmOsSection;
