import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex">
        <SideBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
