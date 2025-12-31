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
        // Ensure we always set an array
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
      // Optimistic state update
      setServiceList(servicelist.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete service.");
    }
  };

  if (!Array.isArray(servicelist)) return null; // safety fallback

  return (
    <div className="flex flex-col gap-y-4">
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
            className="flex flex-row w-full rounded-md bg-blue-300"
          >
            <div className="p-4 flex flex-col gap-y-2 rounded-md bg-blue-300">
              <h1 className="text-lg text-white">
                Service: {item.servicename}
              </h1>
              <h1 className="text-lg text-white">
                Provider: {item.providername}
              </h1>
              <div className="flex gap-x-2 items-center">
                <span className="text-white text-lg">Status:</span>
                <span
                  className={`text-lg font-semibold p-1 text-white rounded-md ${
                    item.status ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {item.status ? "Open" : "Closed"}
                </span>
              </div>

              <div
                onClick={() => handleDelete(item._id)}
                className="flex flex-col cursor-pointer"
              >
                <Lottie
                  className="h-[8vh] place-self-center"
                  animationData={deleteAnimation}
                  loop
                />
                <span className="text-xl text-center">Delete</span>
              </div>
            </div>

            <div className="w-1/3 flex justify-end">
              <img
                className="h-[20vh] mt-7 ml-8"
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
