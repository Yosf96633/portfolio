"use client";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
export function ProfileForm() {
  return (
    <div id="contact" className=" bg-[#0A0A0A] flex flex-col items-center">
      <h1 className=" text-white text-center md:py-12 md:text-5xl md:font-semibold py-6 text-2xl font-normal">
        Contact me!
      </h1>
    <div className=" flex flex-wrap py-6 space-x-8 justify-center items-center">
    <a href="https://github.com/Yosf96633" target="_blank" rel="noopener noreferrer">
              <GithubIcon className=" text-white" size={28}/>
            </a>
            <a href="www.linkedin.com/in/m-yousaf-b357172b6" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className=" text-white" size={28}/>
            </a>
            <a href="mailto:yosf96633@gmail.com">
              <MailIcon className=" text-white" size={28}/>
              </a>
    </div>
      </div>
  );
}
