import React from "react";
import ErrorVideo from "../assets/Video/Search - LottieFiles Platform.mp4";

const Error = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <video
          className="w-full h-auto max-h-[80vh] object-contain mx-auto"
          loop
          muted
          autoPlay
          playsInline
          src={ErrorVideo}
        />
      </div>
    </section>
  );
};

export default Error;
