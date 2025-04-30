import React from "react";
import { Journey } from "@/components/Journey";
import { Services } from "@/components/Servies";
import Project from "@/components/Project";
import {ProfileForm} from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
const page = () => {
  return (
    <div className="">
      <Hero />
      <Journey/>
      <div className=" px-4 bg-black">
      <Services/>
      </div>
      <Project/>
      <ProfileForm/>
      <Footer/>
    </div>
  );
};

export default page;