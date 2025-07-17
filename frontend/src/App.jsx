import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoutes from "./util/ProtectedRoutes";
import AuthRoute from "./util/AuthRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes element={<Home />} />} />
      <Route path="/login" element={<AuthRoute element={<Login />} />} />
      <Route path="/register" element={<AuthRoute element={<Register />} />} />
    </Routes>
  );
};

export default App;
