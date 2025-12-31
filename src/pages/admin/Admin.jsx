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
    <section className="pt-[16vh] px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl flex flex-col gap-6">
        {/* TOP BUTTONS */}
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-4">
          <button
            onClick={() => {
              setService(true);
              setRequests(false);
              setAllService(false);
            }}
            className="flex-1 bg-blue-400 text-white text-lg sm:text-xl p-2 rounded-md hover:bg-black transition"
          >
            Service
          </button>

          <button
            onClick={() => {
              setRequests(true);
              setService(false);
              setAllService(false);
            }}
            className="flex-1 bg-blue-400 text-white text-lg sm:text-xl p-2 rounded-md hover:bg-black transition"
          >
            Requests
          </button>
        </div>

        {/* SINGLE BUTTON BELOW */}
        <div>
          <button
            onClick={() => {
              setAllService(true);
              setRequests(false);
              setService(false);
            }}
            className="w-full bg-blue-400 text-white text-lg sm:text-xl p-2 rounded-md hover:bg-black transition"
          >
            All Service
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="mt-4">
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
    </section>
  );
};

export default Admin;
