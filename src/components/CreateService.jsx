import React, { useState } from "react";
import { UseAdmin } from "../context/Admin/AdminContext";
import axios from "axios";

const CreateService = () => {
  const {
    servicename,
    setServicename,
    providername,
    setProvidername,
    status,
    setStatus,
  } = UseAdmin();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("servicename", servicename);
    formData.append("providername", providername);
    formData.append("status", status);
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URI}/api/provider/createservice`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 201) {
        setServicename("");
        setProvidername("");
        setImage(null);
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-gray-200 p-6 rounded-md w-full max-w-lg bg-white/80 backdrop-blur-sm"
      >
        <input
          type="text"
          value={servicename}
          onChange={(e) => setServicename(e.target.value)}
          placeholder="Enter service name"
          required
          className="w-full p-3 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          value={providername}
          onChange={(e) => setProvidername(e.target.value)}
          placeholder="Enter provider name"
          required
          className="w-full p-3 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="w-full p-2 rounded-md bg-blue-50"
        />

        {/* Status Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <span className="text-lg font-medium">Status:</span>
          <button
            type="button"
            onClick={() => setStatus(!status)}
            className={`px-4 py-1 rounded-md text-white font-medium text-lg transition ${
              status ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status ? "Open" : "Closed"}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-md disabled:opacity-50 hover:bg-gray-900 transition"
        >
          {loading ? "Uploading..." : "Create Service"}
        </button>
      </form>
    </div>
  );
};

export default CreateService;
