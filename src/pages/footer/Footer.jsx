import React from "react";
import footerConnectionImg from "../../assets/img/Footer-Element-400x66.png";
import Lottie from "lottie-react";
import supportAnimation from "../../assets/animations/Support.json";
import aboutAnimation from "../../assets/animations/Learn More.json";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative z-40 mt-24">
      {/* Decorative divider */}
      <div className="flex justify-center mb-10">
        <img
          src={footerConnectionImg}
          alt="Footer connector"
          className="w-screen"
        />
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center sm:text-left">
          {/* Support */}
          <div className="flex flex-col gap-4 md:place-self-center lg:place-self-center">
            <div className="flex items-center justify-center sm:justify-start gap-3 lg:place-self-center">
              <Lottie
                className="h-10 w-10"
                animationData={supportAnimation}
                loop
              />
              <h2 className="text-lg font-medium">Support</h2>
            </div>

            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li className="hover:text-blue-400 cursor-pointer">Live chat</li>
              <li className="hover:text-blue-400 cursor-pointer">
                Help center
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                How it works
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col gap-4 md:place-self-center lg:place-self-center">
            <div className="flex items-center justify-center sm:justify-start gap-3 ">
              <Lottie
                className="h-10 w-10"
                animationData={aboutAnimation}
                loop
              />
              <h2 className="text-lg font-medium">About</h2>
            </div>

            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li className="hover:text-blue-400 cursor-pointer">Reviews</li>
              <li className="hover:text-blue-400 cursor-pointer">Our team</li>
              <li className="hover:text-blue-400 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-white/20" />

        {/* Socials */}
        <div className="flex justify-center gap-8">
          <FaFacebookF
            className="cursor-pointer hover:text-blue-400"
            size={26}
          />
          <FaLinkedinIn
            className="cursor-pointer hover:text-blue-400"
            size={26}
          />
          <FaInstagram
            className="cursor-pointer hover:text-blue-400"
            size={26}
          />
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/20" />

        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
          <span>Copyright</span>
          <FaRegCopyright size={16} />
          <span>2026</span>
          <span className="font-medium">VOKINGS.com</span>
        </div>
      </div>

      <hr className="mt-10 border-white/10" />
    </footer>
  );
};

export default Footer;
