import React, { useEffect, useState } from "react";
import { UseAdmin } from "../context/Admin/AdminContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { setEmail } = UseAdmin();
  const navigate = useNavigate();

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin", { replace: true });
      return;
    }

    const tokenValidator = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URI}/api/admin/tokenvalidator`,
          { token },
          { withCredentials: true }
        );

        if (res.status === 200 && res.data.success) {
          setIsAuthorized(true);
        } else {
          throw new Error("Unauthorized");
        }
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/signin", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    tokenValidator();
  }, [navigate]);

  /* ---------- Responsive Loading State ---------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-y-4 text-center">
          <div className="h-10 w-10 rounded-full border-4 border-blue-400 border-t-transparent animate-spin" />
          <p className="text-sm sm:text-base text-gray-600">
            Verifying access credentials…
          </p>
        </div>
      </div>
    );
  }

  return isAuthorized ? children : null;
};

export default Protected;
