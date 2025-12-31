import React, { useRef, useLayoutEffect } from "react";
import Lottie from "lottie-react";
import FanAnimation from "../../../assets/animations/Fan.json";
import BrainAnimation from "../../../assets/animations/Brain.json";
import DoctorAnimation from "../../../assets/animations/Doctor Health.json";
import GavelAnimation from "../../../assets/animations/Gavel.json";
import GuitarAnimation from "../../../assets/animations/Guitar.json";
import CutAnimation from "../../../assets/animations/cut.json";
import { UseAdmin } from "../../../context/Admin/AdminContext";
import gsap from "gsap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminAuth = () => {
  const { email, setEmail, password, setPassword, setToken } = UseAdmin();
  const navigate = useNavigate();

  const BrainRef = useRef(null);
  const CutRef = useRef(null);
  const DoctorRef = useRef(null);
  const FanRef = useRef(null);
  const GavelRef = useRef(null);
  const GuitarRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2.5,
        ease: "power1.inOut",
      });

      if (BrainRef.current)
        tl.from(BrainRef.current, { x: -50, opacity: 0, duration: 1 });
      if (CutRef.current)
        tl.from(CutRef.current, { y: -50, opacity: 0, duration: 1 });
      if (DoctorRef.current)
        tl.from(DoctorRef.current, { x: 50, opacity: 0, duration: 1 });
      if (FanRef.current)
        tl.from(FanRef.current, { y: 50, opacity: 0, duration: 1 });
      if (GavelRef.current)
        tl.from(GavelRef.current, { y: -50, opacity: 0, duration: 1 });
      if (GuitarRef.current)
        tl.from(GuitarRef.current, { y: 50, opacity: 0, duration: 1 });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URI}/api/admin/signin`,
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        setToken(res.data.token);
        setEmail("");
        setPassword("");
        localStorage.setItem("token", res.data.token);
        navigate("/adminpanel");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-blue-50 to-white">
      {/* Floating Lottie Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-40 left-1/4 sm:top-12 sm:left-1/5 w-12 h-12 lg:w-24 lg:h-24 lg:"
          ref={BrainRef}
        >
          <Lottie animationData={BrainAnimation} loop />
        </div>
        <div
          className="absolute top-48 right-1/4 sm:top-20 sm:right-1/5 w-12 h-12 lg:w-24 lg:h-24"
          ref={DoctorRef}
        >
          <Lottie animationData={DoctorAnimation} loop />
        </div>
        <div
          className="absolute bottom-20 left-1/5 w-12 h-12  lg:w-24 lg:h-24"
          ref={FanRef}
        >
          <Lottie animationData={FanAnimation} loop />
        </div>
        <div
          className="absolute bottom-14 right-1/4 w-12 h-12  lg:w-24 lg:h-24"
          ref={GuitarRef}
        >
          <Lottie animationData={GuitarAnimation} loop />
        </div>
        <div
          className="absolute top-24 left-1/7 w-12 h-12  lg:w-24 lg:h-24"
          ref={CutRef}
        >
          <Lottie animationData={CutAnimation} loop />
        </div>
        <div
          className="absolute top-16 right-1/4 w-12 h-12  lg:w-24 lg:h-24"
          ref={GavelRef}
        >
          <Lottie animationData={GavelAnimation} loop />
        </div>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg flex flex-col gap-4 z-10 relative"
      >
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-400 text-white text-lg font-medium p-2 rounded hover:bg-black transition"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminAuth;
