import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoutes;
