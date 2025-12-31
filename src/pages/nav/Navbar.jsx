import { useNavigate, Link } from "react-router-dom";
import VokingsLogo from "../../assets/img/favicon.svg";
import MenuBar from "../../assets/Video/Menu Bar Animations - Free Download in GIF, Lottie JSON.mp4";
import { UseUser } from "../../context/User/UserContext";

const Navbar = () => {
  const { expand, setExpand } = UseUser();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-[70px] sm:h-[80px] backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* BRAND */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img className="h-6 sm:h-7 w-auto" src={VokingsLogo} alt="Vokings" />
          <h1 className="text-xl sm:text-2xl font-medium tracking-tighter">
            V<span className="font-normal">O</span>KINGS
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-400 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/adminpanel" className="hover:text-blue-400 transition">
              Admin
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setExpand(!expand)}
          className="lg:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-10 w-10 rounded-md bg-white/10 backdrop-blur-md"
            src={MenuBar}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
