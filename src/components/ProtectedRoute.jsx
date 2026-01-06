import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔒 Not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // 🔒 Role based access (admin / warden)
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
