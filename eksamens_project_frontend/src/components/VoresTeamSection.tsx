import React from "react";
import Title from "./ui/Title";
import { useTeamQuery } from "@/hooks/queries/useTeamQuery";
import Image from "next/image";
import Loader from "./Loader";
import Error from "./Error";

const VoresTeamSection = () => {
  const { data, isError, isLoading } = useTeamQuery();

  return (
    <section className="mt-32">
      <Title className="text-5xl font-bold text-center" text="Vores team" />
      <article className="flex flex-wrap gap-x-[14%] gap-y-20 justify-center mt-20 mb-52">
        {isLoading && <Loader />}
        {isError && <Error />}
        {data &&
          data.map((teamData) => (
            <section key={teamData._id} className="md:w-[13%] w-10/12 flex flex-col items-center">
              <figure className="mb-12 w-[75%] flex justify-center">
                <Image src={`http://localhost:4444/images/team/${teamData.image}`} width={200} height={200} unoptimized alt="Billede af en person fra teamet" />
              </figure>
              <Title className="mb-2" text={teamData.name} />
              <p className="text-lightseagreen text-xl">{teamData.role}</p>
              <Title className="text-2xl mt-4" text={teamData.phone} />
            </section>
          ))}
      </article>
    </section>
  );
};

export default VoresTeamSection;
