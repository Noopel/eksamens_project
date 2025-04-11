import SpacecraftEditForm from "@/components/admin/SpacecraftEditForm";
import Title from "@/components/ui/Title";
import React from "react";

const page = () => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
      <Title className="text-4xl font-bold text-center mt-8" text="TURE" />
      <Title className="text-center mb-8" text="Her kan du redigere/slette eller lave nye ture" />
      <SpacecraftEditForm />
    </>
  );
};

export default page;
