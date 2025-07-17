import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ element }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return !isLoggedIn ? element : <Navigate to={"/"} replace />;
};

export default AuthRoute;
