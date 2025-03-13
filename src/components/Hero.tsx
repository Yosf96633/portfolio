"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
export function HeroPage() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col justify-center px-16 max-md:px-6">
      <div className=" absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className=" relative z-50 space-y-8 selection:text-black selection:bg-white">
        <h1 className=" md:text-6xl md:font-extrabold font-bold text-4xl  text-white">
          Hi 👋, I'm Yousaf
        </h1>
        <p className="md:text-xl text-lg md:font-semibold tracking-wider text-white">
          A full-stack web developer skilled in React, Next.js, TypeScript,
          Tailwind, Express, Node.js, and MongoDB. I build modern, scalable, and
          secure web applications using tools like Zod, Next-Auth, Shadcn UI,
          and Aeternity UI.
        </p>
        {/* Button */}
       <div className=" max-md:space-y-6 space-x-6">
       <button className="inline-flex cursor-pointer relative z-50 h-12 animate-shimmer items-center justify-center rounded-md border border-gray-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
         See my work
        </button>
        <button className="inline-flex cursor-pointer relative z-50 h-12 animate-shimmer items-center justify-center rounded-md border border-gray-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
         Hire me
        </button>
       </div>
      </div>
    </div>
  );
}
