import React, { useRef } from "react";
import { UseUser } from "../context/User/UserContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
gsap.registerPlugin(useGSAP);

const Slider = () => {
  const { expand } = UseUser();
  const slideRef = useRef(null);
  const sliderTextRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(slideRef.current, {
        x: expand ? "-1%" : "100%",
        opacity: expand ? "1" : "0",
        duration: 0.8,
        ease: "power3.out",
        display: expand ? "block" : "none",
      });

      tl.fromTo(
        sliderTextRef.current.children,
        { y: -1, opacity: 0, display: expand ? "block" : "none" },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          display: expand ? "block" : "none",
          duration: 0.8,
        },
        "-=0.1"
      );

      return () => {
        tl.kill();
      };
    },
    { dependencies: [expand] }
  );

  return (
    <div
      ref={slideRef}
      className="w-1/3 h-screen mt-[12vh] bg-red-[#f2f7ff] fixed hidden top-0 right-0 lg:hidden z-40 bg-blue-50 backdrop-blur-xl"
    >
      <div
        ref={sliderTextRef}
        className="items-center text-center font-normal text-xl pt-4 flex flex-col"
      >
        <Link to="/" className="text-black hover:text-blue-400">
          Home
        </Link>

        <Link to="/services" className="text-black hover:text-blue-400">
          Services
        </Link>

        <Link to="/adminpanel" className="text-black hover:text-blue-400">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Slider;
