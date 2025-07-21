import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-12 py-4 border w-full">
      <div>
        <h1 className="font-bold italic text-xl">M'Fine</h1>
      </div>
      <nav className="flex justify-between items-center gap-x-6">
        <p>
          Welcome,{" "}
          <span className="font-medium text-accent">{user.username}</span>!
        </p>
        <button
          onClick={handleLogout}
          className="font-medium bg-accent px-4 py-2 rounded-md cursor-pointer text-white shadow"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
