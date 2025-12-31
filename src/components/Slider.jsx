import React, { useRef } from "react";
import { UseUser } from "../context/User/UserContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Slider = () => {
  const { expand } = UseUser();
  const slideRef = useRef(null);
  const sliderTextRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      if (!slideRef.current) return;

      tl.to(slideRef.current, {
        x: expand ? "0%" : "100%",
        opacity: expand ? 1 : 0,
        duration: 0.5,
        ease: "power3.out",
        pointerEvents: expand ? "auto" : "none",
      });

      if (sliderTextRef.current) {
        tl.fromTo(
          sliderTextRef.current.children,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
        );
      }

      return () => tl.kill();
    },
    { dependencies: [expand] }
  );

  return (
    <div
      ref={slideRef}
      className="fixed top-0 right-0 h-screen w-1/3 sm:w-3/5 md:w-1/3 bg-blue-50 backdrop-blur-xl shadow-lg z-60 flex flex-col items-center pt-20 lg:hidden"
    >
      <nav
        ref={sliderTextRef}
        className="flex flex-col items-center gap-6 text-xl font-medium"
      >
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/services" className="hover:text-blue-400 transition">
          Services
        </Link>
        <Link to="/adminpanel" className="hover:text-blue-400 transition">
          Admin
        </Link>
      </nav>
    </div>
  );
};

export default Slider;
