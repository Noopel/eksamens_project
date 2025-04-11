"use client";
import React, { FormEvent, useEffect } from "react";
import AdminInput from "./AdminInput";
import { useQuill } from "react-quilljs";
import { title } from "process";

export type SpaceshipAdminFormProps = {
  onSubmit: (formData: FormData) => void;
  defaultValues?: {
    title?: string,
    content?: string,
  };
};

const SpaceshipAdminForm = ({ onSubmit, defaultValues }: SpaceshipAdminFormProps) => {
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
      <AdminInput className="w-1/4" type="file" accept="image/png, image/gif, image/jpeg" name="image" placeholder="Billede" />
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

export default SpaceshipAdminForm;
