"use client";
import React, { useEffect, useRef } from "react";
import TureAdminForm from "./TureAdminForm";
import useRequestData from "@/hooks/useRequestData";
import Error from "../Error";
import Loader from "../Loader";

const TureAdminCreate = () => {
  const { makeRequest, data, isError, isLoading } = useRequestData();

  const handleSubmit = (formData: FormData) => {
    

    makeRequest("http://localhost:4444/tours/admin", "POST", undefined, formData)
  };

  return (
    <>
      <TureAdminForm onSubmit={handleSubmit} />
      {data && !isLoading && <div className="py-8 text-green-500 text-center">Success! Lavede nyt tur!.</div>}
      {isError && !isLoading && <Error />}
      {isLoading && <Loader />}
    </>
  );
};

export default TureAdminCreate;
