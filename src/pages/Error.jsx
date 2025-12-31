import React from "react";
import ErrorVideo from "../assets/Video/Search - LottieFiles Platform.mp4";

const Error = () => {
  return (
    <div className="h-screen w-screen p-4 md:p-6 lg:p-8">
      <video
        className="h-full w-full"
        loop
        muted
        autoPlay
        src={ErrorVideo}
      ></video>
    </div>
  );
};

export default Error;
