import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ClientRequest = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const serviceId = state?.serviceId;

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    clientName: "",
    serviceDate: "",
    price: "",
  });

  useEffect(() => {
    if (!serviceId) return;

    const fetchService = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URI}/api/user/request`,
          { serviceId },
          { withCredentials: true }
        );

        setService(res.data.service);
      } catch (err) {
        console.error("Service fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  if (!serviceId) {
    return (
      <div className="text-center mt-[20vh] px-4">
        <h1 className="text-xl text-red-500 mb-4">Invalid request context</h1>
        <button
          onClick={() => navigate("/services")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mt-[20vh] text-blue-500 text-xl">
        Loading service details...
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.price) < 40) {
      alert("Price must be more than or equal $40");
      return;
    }

    console.log({
      serviceId,
      ...formData,
    });

    alert("Request submitted successfully");
  };

  return (
    <div className="max-w-3xl mx-auto mt-[12vh] p-4 sm:p-6 md:p-8 bg-blue-100 rounded-md shadow-md">
      {/* Service Verification */}
      <h1 className="text-2xl font-semibold text-blue-800 mb-4 text-center md:text-left">
        Verify Service
      </h1>

      <div className="bg-blue-200 p-4 rounded-md mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <p className="text-lg text-blue-900 font-medium">
            <strong>Service:</strong> {service.servicename}
          </p>
          <p className="text-lg text-blue-900 font-medium">
            <strong>Provider:</strong> {service.providername}
          </p>
          <p className="text-lg text-blue-900 font-medium">
            <strong>Status:</strong>{" "}
            <span
              className={`font-semibold ${
                service.status ? "text-green-700" : "text-red-700"
              }`}
            >
              {service.status ? "Open" : "Closed"}
            </span>
          </p>
        </div>
      </div>

      {/* Request Form */}
      <h2 className="text-xl font-semibold text-blue-800 mb-3 text-center md:text-left">
        Request Details
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="clientName"
          placeholder="Your Name"
          value={formData.clientName}
          onChange={handleChange}
          required
          className="p-2 rounded border border-blue-300 focus:outline-none w-full"
        />

        <input
          type="date"
          name="serviceDate"
          value={formData.serviceDate}
          onChange={handleChange}
          required
          className="p-2 rounded border border-blue-300 focus:outline-none w-full"
        />

        <input
          type="number"
          name="price"
          placeholder="Price (Min $40)"
          value={formData.price}
          onChange={handleChange}
          required
          className="p-2 rounded border border-blue-300 focus:outline-none w-full"
        />

        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-lg w-full"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ClientRequest;
