import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ element }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? element : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;
