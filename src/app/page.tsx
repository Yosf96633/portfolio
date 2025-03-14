import React from "react";
import { HeroPage } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Services } from "@/components/Servies";

const page = () => {
  return (
    <div className="">
      <HeroPage />
      <Journey/>
      <Services/>
    </div>
  );
};

export default page;
