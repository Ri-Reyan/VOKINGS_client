import { useNavigate } from "react-router-dom";
import VokingsLogo from "../../assets/img/favicon.svg";
import MenuBar from "../../assets/Video/Menu Bar Animations - Free Download in GIF, Lottie JSON.mp4";
import { UseUser } from "../../context/User/UserContext";

const Navbar = () => {
  const { expand, setExpand } = UseUser();
  const navigate = useNavigate();
  return (
    <nav
      className="
      fixed top-0 left-0 w-full h-[80px] z-50
      backdrop-blur-md
      bg-white/8 rounded
      border-b border-white/20
      shadow-lg
    "
    >
      <section className="w-screen px-4 py-4 flex">
        <div onClick={() => navigate("/")} className="flex gap-1 w-1/2 my-2">
          <img className="h-[25px] my-1 w-auto" src={VokingsLogo} alt="" />
          <h1 className="text-2xl flex tracking-tighter">
            V <span>O</span>
            KINGS
          </h1>
        </div>

        <div
          onClick={() => setExpand(!expand)}
          className="w-1/2 flex place-content-end lg:hidden"
        >
          <video
            autoPlay
            loop
            muted
            className="h-[50px] w-[50px] bg-white/8 backdrop-blur-md"
            src={MenuBar}
          ></video>
        </div>
        {/* <ul className="flex-col gap-6 text-black">
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Sign up</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul> */}
      </section>
    </nav>
  );
};

export default Navbar;
