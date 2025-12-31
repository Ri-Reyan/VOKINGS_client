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
    <section className="mt-[16vh] px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-y-16">
        {/* HERO */}
        <div className="flex flex-col items-center gap-y-6 text-center">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Get Bookings, Take Payments, and Grow Your Business
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-gray-500 tracking-tight">
            Save time spent on coordinating appointments over phone and email
            with an all-in-one appointment booking software. Accept online
            bookings 24x7, automate payments, business management, marketing,
            and more!
          </p>

          <button
            onClick={() => navigate("/services")}
            className="px-8 py-4 text-base sm:text-lg font-medium text-white bg-blue-400 rounded-full hover:bg-black transition-colors"
          >
            Get started now
          </button>
        </div>

        {/* MEDIA + CONTENT */}
        <div className="flex flex-col gap-y-12">
          {/* VIDEO */}
          <video
            className="w-full max-h-[70vh] rounded-xl object-cover"
            loop
            muted
            autoPlay
            playsInline
            src={servicesVideo}
          />

          <p className="max-w-4xl mx-auto text-sm sm:text-base text-gray-500 text-center tracking-tight">
            VOKINGS define your services and providers, display their
            availability, and you will have clients both old and new making
            bookings 24/7.
          </p>

          {/* IMAGE */}
          <img
            src={firstIm}
            alt="First impression preview"
            className="w-full max-w-4xl mx-auto rounded-xl"
          />

          {/* TEXT BLOCK */}
          <div className="flex flex-col gap-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-center">
              Your entire business on one page
            </h3>

            <p className="text-center text-sm sm:text-base text-gray-600">
              Beautifully branded booking pages that display the availability
              you want and streamline your scheduling.
            </p>

            <ul className="list-disc marker:text-blue-400 pl-5 space-y-4 text-sm sm:text-base">
              {listedText.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
