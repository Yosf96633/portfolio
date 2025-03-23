import React from "react";
import { ThreeDMarqueeDemoSecond } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Services } from "@/components/Servies";
import Project from "@/components/Project";
import {ProfileForm} from "@/components/Contact";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div className="">
      <ThreeDMarqueeDemoSecond />
      <Journey/>
      <Services/>
      <Project/>
      <ProfileForm/>
      <Footer/>
    </div>
  );
};

export default page;
