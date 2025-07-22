import { useEffect, useState } from "react";
import { data, NavLink } from "react-router-dom";

const Transactions = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const url = "http://localhost:8000/api/expense/9";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`error status: ${response.status}`);

      const json = await response.json();
      setDatas(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" bg-green-300">
      {loading && <div>Loading...</div>}
      {!loading && datas.length === 0 && <div>No transaction found</div>}
      {!loading && datas.length > 0 && (
        <div>
          {datas.map((data) => (
            <div key={data.expenseId} className="mb-2 border w-full">
              Amount: {data.amount}
            </div>
          ))}
        </div>
      )}
      <button className="border px-4" onClick={() => setIsActive(true)}>
        Add transaction
      </button>
      {isActive && <Modal setIsActive={setIsActive} />}
    </div>
  );
};

function Modal({ setIsActive }) {
  return (
    <div className="absolute h-screen w-full flex items-center justify-center top-0 left-0 bg-red-100">
      <div className="border">
        <nav>
          <ul>
            <NavLink to="/transactions/gain">Gain</NavLink>
            <NavLink to="/transactions/expenses">Expense</NavLink>
          </ul>
        </nav>
        <button className="border px-4" onClick={() => setIsActive(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Transactions;
