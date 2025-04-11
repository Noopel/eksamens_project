"use client";
import { useFooterQuery } from "@/hooks/queries/useFooterQuery";
import React from "react";
import Title from "../ui/Title";
import Text from "../ui/Text";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import Loader from "../Loader";
import Error from "../Error";

const FooterContact = () => {
  const { data, isLoading, isError } = useFooterQuery();

  return (
    <section className="flex gap-9 flex-col md:w-1/3 w-full">
      <Title className="md:text-left text-center" text="KONTAKT" />
      {isLoading && <Loader />}
      {isError && <Error />}
      {data && (
        <div className="flex flex-col gap-6 md:ms-0 ms-[15%]">
          <div className="flex items-center gap-6">
            <FaPhoneAlt className="text-lightseagreen text-2xl" />
            <Text text={data.phone} />
          </div>
          <div className="flex items-center gap-6">
            <TbMailFilled className="text-lightseagreen text-3xl" />
            <Text text={data.email} />
          </div>
          <div className="flex items-center gap-6">
            <FaLocationArrow className="text-lightseagreen text-2xl" />
            <Text text={data.address} />
          </div>
        </div>
      )}
    </section>
  );
};

export default FooterContact;
