import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-[#0A0A0A] text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
  
          <div className="flex space-x-4 mt-4 md:mt-0">
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
      </footer>
    );
  };
  
  export default Footer;
  