import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../util/AuthContext";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) return 0;

    await getData();
  };

  const getData = async () => {
    const URL = "http://localhost:8000/api/user/login";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const json = await response.json();
      console.log(json);
      console.log("Login");
      localStorage.setItem("email", credentials.email);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Data error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col w-full h-screen bg-stone-100 gap-y-6">
      <div className="w-full max-w-90 shadow-lg/20 px-6 py-10 rounded-xl bg-background">
        <header className="w-full mb-4">
          <h1 className="text-2xl font-bold">Login</h1>
        </header>
        <form className="w-full grid gap-y-4">
          <div className="grid gap-y-1">
            <label htmlFor="email" className="text-base">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Ex. johndoe@email.com"
              value={credentials.email}
              onChange={(e) =>
                setCredentials((prev) => ({ ...prev, email: e.target.value }))
              }
              className="block w-full border-2 rounded px-2 py-1 border-stone-300 text-base"
            />
          </div>
          <div className="grid gap-y-1">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-base">
                Password
              </label>
              <Link to="/forgot-password" className="underline text-blue-600">
                Forgot password?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              className="block w-full border-2 rounded px-2 py-1 border-stone-300 text-base"
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-secondary text-base cursor-pointer py-1 rounded"
          >
            Login
          </button>
        </form>
      </div>
      <div className="">
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="underline text-blue-600">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
