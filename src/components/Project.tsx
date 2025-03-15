"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function Project() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] w-full flex flex-col items-center justify-center ">
      <h1 className=" text-white text-center md:py-12 md:text-5xl md:font-semibold py-6 text-2xl font-normal">My Projects</h1>
     <div className=" flex items-center justify-center flex-wrap max-md:space-y-16">
     <PinContainer
        title="https://auranest.netlify.app/"
        href="https://auranest.netlify.app/"
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
           Auranest
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-black ">
             Build an E-commerce web app with React , React Router and Redux. Also integrate Dummy JSON API.
            </span>
          </div>
          <Image 
  src="/auramart.PNG" 
  height={200} // Increased height
  width={200}  // Increased width
  alt="auranest" 
  className="w-full h-auto object-cover rounded-lg border border-black"
/>        </div>
      </PinContainer>
      <PinContainer
        title="https://cinepop23yosf.netlify.app/"
        href="https://cinepop23yosf.netlify.app/"
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
            CinePop
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-black ">
             A Movie info web app bulid with React, React Router and Redux. Also integrate TMBD API for fetch real time data. For Stunning UI, I use Framer Motion and Ant Design
            </span>
          </div>
          <Image 
  src="/cinepop.PNG" 
  height={200} // Increased height
  width={200}  // Increased width
  alt="cinepop" 
  className="w-full h-auto object-cover rounded-lg border border-black"
/>        </div>
      </PinContainer>
      <PinContainer
        title="https://votingapp98.netlify.app/"
        href="https://votingapp98.netlify.app/"
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
           DemoraSys
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-black ">
             A full-stack voting web app. Frontend is build with React, React Router, Redux and Tailwind CSS.
            </span>
          </div>
          <Image 
  src="/demosys.PNG" 
  height={200} // Increased height
  width={200}  // Increased width
  alt="Demosys" 
  className="w-full h-auto object-cover rounded-lg border border-black"
/>        </div>
      </PinContainer>
     </div>
    </div>
  );
}
