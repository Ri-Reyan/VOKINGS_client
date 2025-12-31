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
          headers: {
            "Content-Type": "multipart/form-data",
          },
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col place-items-center gap-y-4 border border-gray-200 p-4 rounded-md bg-transparent"
      >
        <input
          onChange={(e) => setServicename(e.target.value)}
          className="bg-blue-50 p-4 rounded-md focus:outline-none"
          type="text"
          value={servicename}
          placeholder="Enter service name"
          required
        />

        <input
          onChange={(e) => setProvidername(e.target.value)}
          className="bg-blue-50 p-4 rounded-md focus:outline-none"
          type="text"
          value={providername}
          placeholder="Enter provider name"
          required
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="bg-blue-50 p-2 rounded-md w-[60vw]"
          required
        />

        <div className="flex flex-row gap-x-2 items-center w-[60vw] place-content-center">
          <h1 className="text-xl font-medium text-black w-1/3">Status:</h1>
          <h1
            onClick={() => setStatus(!status)}
            className={`${
              status ? "bg-green-500" : "bg-red-500"
            } cursor-pointer font-medium rounded-md px-3 py-1 text-white text-lg`}
          >
            {status ? "Open" : "Closed"}
          </h1>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-md disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Create Service"}
        </button>
      </form>
    </div>
  );
};

export default CreateService;
