import React, { useRef } from "react";
import Lottie from "lottie-react";
import FanAnimation from "../../../assets/animations/Fan.json";
import BrainAnimation from "../../../assets/animations/Brain.json";
import DoctorAnimation from "../../../assets/animations/Doctor Health.json";
import GavelAnimation from "../../../assets/animations/Gavel.json";
import GuitarAnimation from "../../../assets/animations/Guitar.json";
import CutAnimation from "../../../assets/animations/cut.json";
import { UseAdmin } from "../../../context/Admin/AdminContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

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
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        setToken(res.data.token);
        setEmail("");
        setPassword("");
        navigate("/adminpanel");
        localStorage.setItem("token", res.data.token);
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <section className="w-screen mt-[20vh]">
      <div>
        <div ref={CutRef}>
          <Lottie
            className="h-[60px] relative bottom-[5vh] right-[20vw]"
            animationData={CutAnimation}
            loop
            autoplay
          />
        </div>
        <div ref={FanRef}>
          <Lottie
            className="h-[60px] relative left-[20vw] bottom-[9vh]"
            animationData={FanAnimation}
            loop
            autoplay
          />
        </div>
        <div ref={BrainRef}>
          <Lottie
            className="h-[60px] relative right-[40vw]"
            animationData={BrainAnimation}
            loop
            autoplay
          />
        </div>
        <div ref={DoctorRef}>
          <Lottie
            className="h-[60px] relative left-[35vw]"
            animationData={DoctorAnimation}
            loop
            autoplay
          />
        </div>
        <div ref={GuitarRef}>
          <Lottie
            className="h-[60px] relative top-[15vh] right-[20vw]"
            animationData={GuitarAnimation}
            loop
            autoplay
          />
        </div>
        <div ref={GavelRef}>
          <Lottie
            className="h-[60px] relative bottom-[5vh] left-[20vw]"
            animationData={GavelAnimation}
            loop
            autoplay
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col place-items-center place-self-center w-[65vw] bg-transparent relative p-4 z-30 backdrop-blur-sm bottom-80 border border-gray-200 gap-y-3 rounded-md"
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="bg-blue-50 p-2 focus:outline-none rounded"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="bg-blue-50 p-2 focus:outline-none rounded"
          type="password"
          name="password"
          value={password}
          required
          placeholder="Password"
        />
        <button className="w-[100%] bg-blue-400 p-2 text-xl font-medium text-white hover:bg-black">
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminAuth;
