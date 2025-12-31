import React from "react";
import servicesVideo from "../assets/Video/new-homepage-hero-video-pc.webm";
import firstIm from "../assets/img/first-impressions-1.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const listedText = [
    "Offer different kind & length appointments",
    "Minimum notice periods, buffer time, group sessions",
    "Offer a choice of in-person or online meetings",
    "Logo, color, background image, footer",
    "Share on social media, your website, email signature & in-person",
  ];

  return (
    <section className="flex flex-col gap-y-8  px-4 md:px-6 lg:px-12 mt-[20vh]">
      <div className="flex flex-col gap-y-8">
        <h1 className="font-semibold text-3xl text-center">
          Get Bookings, Take Payments, and Grow Your Business
        </h1>
        <p className="text-sm text-gray-500 text-center tracking-tight">
          Save time spent on coordinating appointments over phone and email with
          an all-in-one appointment booking software. Accept online bookings
          24x7, automate payments, business management, marketing, and more!
        </p>
        <button
          onClick={() => navigate("/services")}
          className="p-4 text-center font-medium text-lg text-white bg-blue-400 rounded-full hover:bg-black"
        >
          Get started now
        </button>
      </div>

      <div className="flex flex-col gap-y-8">
        <video
          className="w-screen"
          loop
          muted
          autoPlay
          src={servicesVideo}
        ></video>
        <p className="text-sm text-gray-500 text-center tracking-tight">
          VOKINGS define your services and providers, display their
          availability, and you will have clients both old and new making
          bookings 24/7.
        </p>
        <img src={firstIm} alt="" />
        <br />
        <div className="flex flex-col gap-y-6">
          <h3 className="text-3xl font-normal text-center">
            Your entire business on one page
          </h3>
          <p className="text-center">
            Beautifully branded booking pages that display the availability you
            want and streamline your scheduling.
          </p>
          <ul className="list-disc marker:text-blue-400 items-center pl-5 space-y-4">
            {listedText.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
