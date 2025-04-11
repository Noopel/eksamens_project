"use client";
import React, { FormEvent, useEffect } from "react";
import AdminInput from "./AdminInput";
import { useQuill } from "react-quilljs";
import { title } from "process";

export type AdminFormProps = {
  onSubmit: (formData: FormData) => void;
  defaultValues?: {
    title?: string;
    traveltime?: string;
    destination?: string;
    distance?: string;
    price?: string;
    rating?: number;
    spacelaunch?: string;
    content?: string;
  };
};

const TureAdminForm = ({ onSubmit, defaultValues }: AdminFormProps) => {
  if (!defaultValues) {
    defaultValues = {};
  }
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(defaultValues.content || "<h1>Skriv indhold her!</h1>");
    }
  }, [quill]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    formData.append("content", quill?.getText() || "");

    
    onSubmit(formData);
  }

  return (
    <form className="flex flex-wrap px-10 gap-4 mt-4 justify-center" onSubmit={handleSubmit}>
      <AdminInput className="w-1/4" type="text" name="title" defaultValue={defaultValues.title} placeholder="Titel" required />
      <AdminInput className="w-1/4" type="text" name="traveltime" defaultValue={defaultValues.traveltime} placeholder="Transport tid" required />
      <AdminInput className="w-1/4" type="text" name="destination" defaultValue={defaultValues.destination} placeholder="Destination" required />
      <AdminInput className="w-1/4" type="text" name="distance" defaultValue={defaultValues.distance} placeholder="Afstand" required />
      <AdminInput className="w-1/4" type="text" name="price" defaultValue={defaultValues.price} placeholder="Pris" required />
      <AdminInput className="w-1/4" type="file" accept="image/png, image/gif, image/jpeg" name="image1" placeholder="Billede 1" />
      <AdminInput className="w-1/4" type="file" accept="image/png, image/gif, image/jpeg" name="image2" placeholder="Billede 2" />
      <AdminInput className="w-1/4" type="number" name="rating" defaultValue={defaultValues.rating} max={5} min={0} placeholder="Rating" required />
      <AdminInput className="w-1/4" type="date" name="spacelaunch" defaultValue={defaultValues.spacelaunch} placeholder="Rum affyring" required />
      <section className="w-[80%]">
        <div ref={quillRef} />
      </section>
      <div className="w-full flex justify-center mt-16">
        <button className="bg-lightseagreen/80 hover:bg-lightseagreen p-4 px-20" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TureAdminForm;
