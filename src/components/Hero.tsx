import React from "react";
import Particles from "./ui/particles";
import RotatingText from "./ui/RotatingText";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div className=" bg-black relative w-screen h-screen max-md:h-[80vh]">
      <div className=" h-full w-full absolute z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className=" absolute z-10 text-white flex flex-col top-36 left-28 space-y-6 max-md:left-6">
        <h1 className=" flex space-x-3 items-center">
          <p className=" text-4xl font-semibold max-md:text-2xl max-md:font-light">Hi, I'm </p>

          <RotatingText
            texts={[
              "Yousaf",
              "A Full Stack Dev",
              "A Problem Solver",
              "A MERN Stack Dev",
              "A Next.js Dev",
              "Web & AI Enthusiast",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
            className="text-6xl font-bold max-md:text-3xl max-md:font-semibold"
          />
        </h1>
        <p className=" max-w-6xl md:text-3xl md:font-light md:leading-10 md:tracking-widest text-xl font-light pr-4">
          A dedicated Full-Stack Web Developer with expertise in the MERN stack
          and Next.js. I enjoy building fast, scalable, and user-friendly web
          applications with a strong focus on performance and clean
          architecture. My experience includes developing features like
          authentication, real-time communication, API integration, and UI
          libraries using technologies such as MongoDB, Express.js, React,
          Next.js, Tailwind CSS, and ShadCN.
        </p>
        <div className=" my-6 space-x-4">
          <Button className=" bg-black text-white cursor-pointer border border-white">
            <a href="#projects">See my work</a>
          </Button>
          <Button className=" text-black bg-white cursor-pointer">
            <a href="#contact">Hire me</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
