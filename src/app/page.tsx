import React from "react";
import { HeroPage } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Services } from "@/components/Servies";
import { Project } from "@/components/Project";
const page = () => {
  return (
    <div className="">
      <HeroPage />
      <Journey/>
      <Services/>
      <Project/>
    </div>
  );
};

export default page;
