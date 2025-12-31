import React, { useEffect, useState } from "react";
import { UseAdmin } from "../context/Admin/AdminContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  // children রিসিভ করতে হবে
  const { setEmail } = UseAdmin();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
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
        }
      } catch (err) {
        console.error("Auth failed", err);
        localStorage.removeItem("token");
        navigate("/signin");
      } finally {
        setLoading(false);
      }
    };

    tokenValidator();
  }, [navigate]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Checking Authentication...
      </div>
    );
  }

  return isAuthorized ? children : null;
};

export default Protected;
