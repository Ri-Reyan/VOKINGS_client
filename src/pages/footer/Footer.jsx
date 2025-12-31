import React from "react";
import footerConnectionImg from "../../assets/img/Footer-Element-400x66.png";
import Lottie from "lottie-react";
import supportAnimation from "../../assets/animations/Support.json";
import aboutAnimation from "../../assets/animations/Learn More.json";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-y-8 z-40">
      <div>
        <img className="" src={footerConnectionImg} alt="footerConnectionImg" />
      </div>

      <div className="flex flex-row gap-y-8 gap-x-6  px-4 md:px-6 lg:px-12 text-center">
        <div className="flex flex-col gap-y-2 w-1/2">
          <div className="flex flex-row gap-x-4">
            <Lottie
              className="h-[5vh]"
              animationData={supportAnimation}
              loop={true}
            />
            <h1>Support</h1>
          </div>

          <h5 className="text-gray-400 hover:text-blue-400">Live chat</h5>
          <h5 className="text-gray-400 hover:text-blue-400">Help center</h5>
          <h5 className="text-gray-400 hover:text-blue-400">How it works</h5>
        </div>
        <div className="flex flex-col gap-y-2 w-1/2">
          <div className="flex flex-row gap-x-4">
            <Lottie
              className="h-[5vh]"
              animationData={aboutAnimation}
              loop={true}
            />
            <h1>About</h1>
          </div>

          <h5 className="text-gray-400 hover:text-blue-400">Reviews</h5>
          <h5 className="text-gray-400 hover:text-blue-400">Our teams</h5>
          <h5 className="text-gray-400 hover:text-blue-400">Contacts</h5>
        </div>
      </div>
      <hr />
      <div className="flex flex-row gap-x-8 px-4 md:px-6 lg:px-12 place-content-center w-full">
        <FaFacebookF
          onClick={() => navigate("https://www.facebook.com/i.reyannn")}
          size={"30px"}
        />
        <FaLinkedinIn
          onClick={() =>
            navigate(
              "https://www.linkedin.com/in/ri-reyan-2207b8349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            )
          }
          size={"30px"}
        />
        <FaInstagram
          onClick={() =>
            navigate(
              "https://www.instagram.com/i.reyannn?igsh=ZGJtaGxoYWhxdXV6"
            )
          }
          size={"30px"}
        />
      </div>
      <hr />
      <div className="flex flex-row place-content-center gap-x-1">
        <h3>Copyright</h3>
        <FaRegCopyright className="" size={"20px"} />
        <h3>2026</h3>
        <h3>VOKINGS.com</h3>
      </div>
      <hr />
    </section>
  );
};

export default Footer;
