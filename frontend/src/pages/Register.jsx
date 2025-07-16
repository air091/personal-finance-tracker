import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.email || !credentials.password)
      return 0;

    await getData();
  };

  const getData = async () => {
    const URL = "http://localhost:8000/api/user";
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("data error:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col w-full h-screen bg-stone-100 gap-y-6">
        <div className="w-full max-w-90 shadow-lg/20 px-6 py-10 rounded-xl bg-background">
          <header className="w-full mb-4">
            <h1 className="text-2xl font-bold">Register</h1>
          </header>
          <form className="w-full grid gap-y-4">
            <div className="grid gap-y-1">
              <label htmlFor="username" className="text-base">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Ex. Doe123"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                autoComplete="off"
                className="block w-full border-2 rounded px-2 py-1 border-stone-300 text-base"
              />
            </div>
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
                autoComplete="off"
                className="block w-full border-2 rounded px-2 py-1 border-stone-300 text-base"
              />
            </div>
            <div className="grid gap-y-1">
              <label htmlFor="password" className="text-base">
                Password
              </label>

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
                autoComplete="off"
                className="block w-full border-2 rounded px-2 py-1 border-stone-300 text-base"
              />
            </div>
            <button
              type="submit"
              onClick={handleRegister}
              className="w-full bg-secondary text-base cursor-pointer py-1 rounded"
            >
              Register
            </button>
          </form>
        </div>
        <div className="">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="underline text-blue-600">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
