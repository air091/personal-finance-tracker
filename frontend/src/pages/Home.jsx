import React, { useContext } from "react";
import { AuthContext } from "../util/AuthContext";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
