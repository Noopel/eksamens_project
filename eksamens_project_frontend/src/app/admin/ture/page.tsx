"use client";
import TureAdminCreate from "@/components/admin/TureAdminCreate";
import TureList from "@/components/admin/TureList";
import Container from "@/components/Container";
import Title from "@/components/ui/Title";
import React from "react";

const page = () => {
    
  return (
    <main>
      <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
      <Title className="text-4xl font-bold" text="TURE" />
      <Title text="Her kan du redigere/slette eller lave nye ture" />

      <Container>
        <section className="w-full mt-12">
          <Title className="text-center text-4xl" text="Lav ny tur" />
          <TureAdminCreate />
        </section>
        <TureList />
      </Container>
    </main>
  );
};

export default page;
