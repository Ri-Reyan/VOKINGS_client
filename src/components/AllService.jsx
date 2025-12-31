import React, { useEffect } from "react";
import { UseAdmin } from "../context/Admin/AdminContext";
import axios from "axios";
import Lottie from "lottie-react";
import deleteAnimation from "../assets/animations/minus.json";

const AllService = () => {
  const { servicelist, setServiceList } = UseAdmin();

  // Fetch services on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URI}/api/admin/findallservice`,
          { withCredentials: true }
        );
        setServiceList(res.data.services || []);
      } catch (err) {
        console.error("Service fetch failed:", err);
        setServiceList([]);
      }
    };
    fetchServices();
  }, [setServiceList]);

  // Delete service
  const handleDelete = async (id) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URI}/api/admin/delete`,
        { _id: id },
        { withCredentials: true }
      );
      setServiceList(servicelist.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete service.");
    }
  };

  if (!Array.isArray(servicelist)) return null;

  return (
    <div className="flex flex-col gap-6">
      {servicelist.length === 0 ? (
        <div>
          <h1 className="text-xl text-center text-gray-600 mt-4">
            No services available
          </h1>
        </div>
      ) : (
        servicelist.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row w-full bg-blue-300 rounded-md overflow-hidden shadow-md"
          >
            {/* Service Info */}
            <div className="flex-1 p-4 flex flex-col gap-2 bg-blue-300">
              <h1 className="text-lg text-white font-semibold">
                Service: {item.servicename}
              </h1>
              <h1 className="text-lg text-white font-semibold">
                Provider: {item.providername}
              </h1>

              <div className="flex items-center gap-2">
                <span className="text-white text-lg font-medium">Status:</span>
                <span
                  className={`text-lg font-semibold p-1 rounded-md text-white ${
                    item.status ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {item.status ? "Open" : "Closed"}
                </span>
              </div>

              {/* Delete Button */}
              <div
                onClick={() => handleDelete(item._id)}
                className="flex flex-col items-center cursor-pointer mt-2"
              >
                <Lottie
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  animationData={deleteAnimation}
                  loop
                />
                <span className="text-white text-lg font-medium">Delete</span>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center p-4 bg-blue-200 md:w-1/3">
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

export default AllService;
