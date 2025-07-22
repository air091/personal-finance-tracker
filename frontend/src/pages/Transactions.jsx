import { useEffect, useState } from "react";
import Modal from "../components/transactions/Modal";

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
    <div className="">
      {loading && <div>Loading...</div>}
      {!loading && datas.length === 0 && <div>No transaction found</div>}
      {!loading && datas.length > 0 && (
        <div>
          {datas.map((data) => (
            <div
              key={data.expenseId}
              className="mb-2 border w-full flex justify-between"
            >
              <div className="w-full">
                <div className="flex justify-between">
                  <span>{data.category}</span>
                  <span className="text-red-500 font-bold">
                    -${data.amount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p>{data.description}</p>
                  <span>{data.method}</span>
                </div>
              </div>
              <button className="bg-blue-400 px-4">edit</button>
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

export default Transactions;
