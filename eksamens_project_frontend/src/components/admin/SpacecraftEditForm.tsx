"use client"
import { useSpacecraftQuery } from "@/hooks/queries/useSpacecraftQuery";
import useRequestData from "@/hooks/useRequestData";
import React from "react";
import Error from "../Error";
import Loader from "../Loader";
import SpaceshipAdminForm from "./SpaceshipAdminForm";

const SpacecraftEditForm = () => {
  const { data, isError, isLoading, refetch } = useSpacecraftQuery();
  const { makeRequest, data: putData, isError: isPutError } = useRequestData();

  function handleSubmit(formData: FormData) {
    if (!data) return;
    makeRequest(`http://localhost:4444/spacecraft/admin`, "PUT", undefined, formData);
  }

  return (
    <>
      {isError || (isPutError && !isLoading && <Error />)}
      {isLoading && <Loader />}
      {data && (
        <SpaceshipAdminForm
          onSubmit={handleSubmit}
          defaultValues={{
            content: data.content,
            title: data.title,
          }}
        />
      )}
      {putData && !isLoading && <div className="py-8 text-green-500 text-center">Success! Rettede indholdet for Rumfærgen!.</div>}
    </>
  );
};

export default SpacecraftEditForm;
