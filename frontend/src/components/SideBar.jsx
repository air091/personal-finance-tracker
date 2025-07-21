import { NavLink } from "react-router-dom";

const SideBar = () => {
  const sideLinks = ["dashboard", "transaction", "budget"];

  return (
    <nav className=" w-fit border">
      <ul className="flex flex-col border py-2 gap-y-2">
        <NavLink className="px-8 mx-4" to={"/"}>
          Dashboard
        </NavLink>
        <NavLink className="px-8 mx-4" to={"/transactions"}>
          Transactions
        </NavLink>
        <NavLink className="px-8 mx-4" to={"/budgets"}>
          Budgets
        </NavLink>
      </ul>
    </nav>
  );
};

export default SideBar;
