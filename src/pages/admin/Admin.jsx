import React from "react";
import { UseAdmin } from "../../context/Admin/AdminContext";
import CreateService from "../../components/CreateService";
import Requests from "../../components/Requests";
import AllService from "../../components/AllService";

const Admin = () => {
  const {
    requests,
    setRequests,
    service,
    setService,
    allservice,
    setAllService,
  } = UseAdmin();

  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12 gap-x-6 gap-y-8 mt-[20vh]">
      <div className="flex flex-row gap-x-4">
        <div
          onClick={() => {
            setService(true);
            setRequests(false);
            setAllService(false);
          }}
          className="w-1/2 flex place-content-center bg-blue-400 text-white text-xl p-2 rounded-md hover:bg-black"
        >
          <button>Service</button>
        </div>
        <div
          onClick={() => {
            setRequests(true);
            setService(false);
            setAllService(false);
          }}
          className="w-1/2 flex place-content-center bg-blue-400 text-white text-xl p-2 rounded-md hover:bg-black"
        >
          <button>Requests</button>
        </div>
      </div>

      <div>
        <div
          onClick={() => {
            setAllService(true);
            setRequests(false);
            setService(false);
          }}
          className=" flex place-content-center bg-blue-400 text-white text-xl p-2 rounded-md hover:bg-black"
        >
          <button>All service</button>
        </div>
      </div>

      <div>
        {service ? (
          <CreateService />
        ) : requests ? (
          <Requests />
        ) : allservice ? (
          <AllService />
        ) : (
          <Requests />
        )}
      </div>
    </div>
  );
};

export default Admin;
