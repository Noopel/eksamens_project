import Image from "next/image";
import React, { FormEvent, useRef } from "react";
import Title from "./ui/Title";
import Button from "./Button";
import useRequestData from "@/hooks/useRequestData";
import Loader from "./Loader";

export type SubscribeSuccess = {
  message: string;
  oprettet: {
    email: string;
    _id: string;
    __v: number;
  };
};

const NyhedsbrevSection = () => {
  const { makeRequest, data, isError, isLoading } = useRequestData<SubscribeSuccess, any>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)

    makeRequest("http://localhost:4444/newssubscription", "POST", undefined, formData);
    event.currentTarget.reset();
  }

  return (
    <section className="relative mb-16">
      <figure className="max-h-[96rem] md:max-h-[33rem] w-full overflow-hidden ">
        <Image className="w-full h-[40rem] object-cover" src="/newsmail-bg.jpg" width={2000} height={400} alt="Baggrunds billede for nyhedstilmelding" />
      </figure>
      <div className="absolute top-0 left-0 w-full h-full text-white flex flex-col items-center justify-center md:p-0 p-4">
        <Title className="text-6xl font-bold" text="Tilmeld dig og få 25% rabat" />
        <p className="text-2xl my-10">Tilmeld dig vores nyhedsbrev og få 25% rabat på din førse tur!</p>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full justify-center md:flex-row flex-col md:px-0 px-4">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Din E-mail"
            className="w-[100%] md:max-w-[500px] p-5 bg-[rgba(255,255,255,0.4)] placeholder:text-white text-xl"
          />
          <Button type="submit">Tilmeld</Button>
        </form>
        {isLoading && <Loader />}
        {isError && !isLoading && <p className="text-red-500 text-xl font-bold">An error happened! Please try again later.</p>}
        {data && !isLoading && !isError && <p className="text-green-500 text-xl font-bold">Successfully subscribed to the newsletter!</p>}
      </div>
    </section>
  );
};

export default NyhedsbrevSection;
