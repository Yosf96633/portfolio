import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Footer = () => {
    return (
      <footer id="contact" className="bg-[#0A0A0A] text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  