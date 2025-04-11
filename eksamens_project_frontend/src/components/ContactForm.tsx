"use client";
import useRequestData from "@/hooks/useRequestData";
import React, { FormEvent } from "react";
import Button from "./Button";
import Loader from "./Loader";

export type ContactSuccess = {
  message: "Ny er oprettet";
  oprettet: {
    name: string;
    email: string;
    phone: string;
    message: string;
    read: boolean;
    _id: string;
    recieved: string;
    __v: number;
  };
};

const ContactForm = () => {
  const { makeRequest, data, isError, isLoading } = useRequestData<ContactSuccess, any>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    makeRequest("http://localhost:4444/contact", "POST", undefined, formData);
    event.currentTarget.reset();
  }
  return (
    <>
      <form className="flex flex-wrap justify-between gap-y-4 mb-40" onSubmit={handleSubmit}>
        <input required className="w-[31%] p-4 border-neutral-400 border-2 placeholder:text-black" type="text" name="name" placeholder="Dit navn" />
        <input required className="w-[31%] p-4 border-neutral-400 border-2 placeholder:text-black" type="email" name="email" placeholder="E-Mail" />
        <input required className="w-[31%] p-4 border-neutral-400 border-2 placeholder:text-black" type="text" name="phone" placeholder="Tlf" />
        <textarea
          required
          className="resize-none p-4 w-[65.5%] min-h-40 border-neutral-400 border-2 placeholder:text-black"
          name="message"
          placeholder="Besked"
        />
        <div className="w-full mt-4">
          <Button className="px-44">Send</Button>
        </div>
      </form>
      {isLoading && <Loader />}
      {isError && !isLoading && <p className="text-red-500 text-xl font-bold">An error happened! Please try again later.</p>}
      {data && !isLoading && !isError && <p className="text-green-500 text-xl font-bold">Successfully subscribed to the newsletter!</p>}
    </>
  );
};

export default ContactForm;
