import React, { useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import requestAnimation from "../../assets/animations/Hire.json";
import { UseUser } from "../../context/User/UserContext";
import { useNavigate } from "react-router-dom";

const UserService = () => {
  const { servicelist, setServiceList } = UseUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URI}/api/admin/findallservice`,
          { withCredentials: true }
        );
        setServiceList(res.data.services || []);
      } catch (error) {
        console.error("Service fetch failed:", error);
        setServiceList([]);
      }
    };
    fetchServices();
  }, [setServiceList]);

  const handleRequest = (id) => {
    navigate("/request", { state: { serviceId: id } });
  };

  if (!Array.isArray(servicelist)) return null;

  return (
    <div className="flex flex-col gap-6">
      {servicelist.length === 0 ? (
        <h1 className="text-xl text-center text-gray-500 mt-4">
          No services found
        </h1>
      ) : (
        servicelist.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row bg-blue-300 rounded-md overflow-hidden shadow-md"
          >
            {/* Service Info */}
            <div className="flex-1 p-4 flex flex-col gap-2">
              <h1 className="text-lg font-semibold text-white">
                Service: {item.servicename}
              </h1>
              <p className="text-white font-medium">
                Provider: {item.providername}
              </p>

              <div
                onClick={() => handleRequest(item._id)}
                className="flex flex-col items-center cursor-pointer mt-2"
              >
                <Lottie
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  animationData={requestAnimation}
                  loop
                />
                <span className="text-white text-lg font-medium">Request</span>
              </div>
            </div>

            {/* Service Image */}
            <div className="flex justify-center items-center p-4 md:w-1/3 bg-blue-200">
              <img
                className="h-40 sm:h-48 md:h-56 w-auto rounded-md object-cover"
                src={item.image}
                alt={item.servicename}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UserService;
