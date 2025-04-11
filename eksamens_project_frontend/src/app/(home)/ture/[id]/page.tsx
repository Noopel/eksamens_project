"use client";
import Container from "@/components/Container";
import { useTourQuery } from "@/hooks/queries/useTourQuery";
import React from "react";
import parse from "html-react-parser";
import Title from "@/components/ui/Title";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import { FaFacebookF, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";

const TureIdPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const {id} = React.use(params)
  const { data, isLoading, isError } = useTourQuery(id);

  return (
    <main className="mt-40 mb-20">
      {isLoading && <Loader />}
      {isError && <Error />}
      {data && (
        <Container className="flex justify-between md:flex-row flex-col-reverse">
          <section className="md:w-[55%] w-full flex flex-col gap-10 md:mt-0 mt-16">
            <figure className="w-full">
              <img className="w-full" src={`http://localhost:4444/images/tours/${data.image1}`} />
            </figure>
            <figure className="w-full">
              <img className="w-full" src={`http://localhost:4444/images/tours/${data.image2}`} />
            </figure>
          </section>
          <section className="md:w-[40%] w-full">
            <article className="flex flex-col gap-10 my-auto relative">
              <div className="absolute top-0 right-0 py-8 px-6 [] text-3xl text-white bg-lightseagreen rounded-bl-3xl uppercase">{data.price}</div>
              <section className="flex flex-col gap-2">
                <Title className="text-4xl font-bold" text={data.destination} />
                <section className="flex">
                  {[...Array(data.rating)].map((_, i) => (
                    <FaStar key={`rating-${i}`} className="text-2xl text-yellow-400" />
                  ))}
                </section>
              </section>

              <section className="flex flex-wrap gap-y-3 justify-start">
                <div className="w-1/6 h-1 bg-lightseagreen" />
              </section>

              <section className="text-xl opacity-50 flex flex-col gap-10">
                <Title className="w-full text-2xl" text={data.title} />

                {parse(data.content)}
              </section>
              <section className="w-full h-[3px] bg-neutral-200" />
              <section className="flex flex-col gap-5">
                <p className="text-xl">
                  Destination: <span className="opacity-50">{data.destination}</span>
                </p>
                <p className="text-xl">
                  Pris: <span className="opacity-50">{data.price}</span>
                </p>
                <p className="text-xl">
                  Afstand fra jorden: <span className="opacity-50">{data.distance}</span>
                </p>
                <p className="text-xl">
                  Flyvetid: <span className="opacity-50">{data.traveltime}</span>
                </p>
              </section>
              <section className="w-full h-[3px] bg-neutral-200" />
              <section>
                <Title text={`Næste afrejsning - ${new Date(data.spacelaunch).toLocaleDateString()}`} />
              </section>
              <section className="flex">
                <Title text="SHARE" />
                <div className="ms-[4%] flex text-2xl items-center gap-5">
                  <a href="https://facebook.com">
                    <FaFacebookF />
                  </a>
                  <a href="https://x.com">
                    <FaTwitter />
                  </a>
                  <a href="https://google.com">
                    <AiOutlineGooglePlus className="text-3xl" />
                  </a>
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                </div>
              </section>
            </article>
          </section>
        </Container>
      )}
    </main>
  );
};

export default TureIdPage;
