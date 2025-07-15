import React from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Ex. johndoe@email.com"
            className="block w-full border-2 rounded p-2 border-stone-300"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Ex. johndoe@email.com"
            className="block w-full border-2 rounded p-2 border-stone-300"
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
