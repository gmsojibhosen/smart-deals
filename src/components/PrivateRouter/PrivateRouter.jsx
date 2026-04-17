import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthContext";
const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span>Loading.....</span>;
  }
  if (!user) {
    if (!user) {
      return <Navigate to="/register" state={{ from: location.pathname }} />;
    }
  }
  return children;
};

export default PrivateRouter;
