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
    navigate("/request", {
      state: { serviceId: id },
    });
  };

  if (!Array.isArray(servicelist)) return null;

  return (
    <div className="flex flex-col gap-y-4">
      {servicelist.length === 0 ? (
        <h1 className="text-xl text-center text-gray-500 mt-4">
          No services found
        </h1>
      ) : (
        servicelist.map((item) => (
          <div
            key={item._id}
            className="flex justify-between rounded-md bg-blue-300 p-4"
          >
            <div className="flex flex-col gap-y-2">
              <h1 className="text-lg text-white">
                Service: {item.servicename}
              </h1>
              <p className="text-white">Provider: {item.providername}</p>

              <div
                onClick={() => handleRequest(item._id)}
                className="cursor-pointer flex flex-col items-center"
              >
                <Lottie
                  className="h-[8vh]"
                  animationData={requestAnimation}
                  loop
                />
                <span className="text-lg text-white">Request</span>
              </div>
            </div>

            <img className="h-[18vh]" src={item.image} alt={item.servicename} />
          </div>
        ))
      )}
    </div>
  );
};

export default UserService;
