import React from "react";
import { ThreeDCardDemo } from "./Card";
const data = [
  {
    title: `AuraNest`,
    description: `Auranest – A sleek e-commerce web app built with React, Redux, AntD, and Tailwind CSS, featuring dynamic product listings and smooth navigation using DummyJSON API.`,
    image: `/auramart.PNG`,
    github_link: `https://github.com/Yosf96633/AuraNest`,
    live_link: `https://auranest.netlify.app/`,
  },
  {
    title: `Cinepop`,
    description: `CinePop – A movie info web app built with React, Redux, AntD, and Tailwind CSS, fetching data from the TMDB API to display movie details, ratings, and more.`,
    image: `/cinepop.PNG`,
    github_link: `https://github.com/Yosf96633/CinePop`,
    live_link: `https://cinepop23yosf.netlify.app/`,
  },
  {
    title: `DemocraSys`,
    description: `**DemocraSys** – A full-stack voting web app built with **React, Redux, and Tailwind CSS**, allowing users to create, vote, and manage polls seamlessly.`,
    image: `/demosys.PNG`,
    github_link: `https://github.com/Yosf96633/Voting-App`,
    live_link: `https://votingapp98.netlify.app/`,
  },
];
const Project = () => {
  return (
    <div id="projects" className="bg-[#0A0A0A] px-4 max-md:px-2">
      <h1 className=" text-white text-center md:py-12 md:text-5xl md:font-semibold py-6 text-2xl font-normal">
        My Project
      </h1>
      <div className=" flex flex-wrap items-center justify-center md:space-x-6">
        <ThreeDCardDemo {...data[0]} />
        <ThreeDCardDemo {...data[1]} />
        <ThreeDCardDemo {...data[2]} />
      </div>
    </div>
  );
};

export default Project;
