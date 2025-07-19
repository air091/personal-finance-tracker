import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedId = localStorage.getItem("id");
    const storedUsername = localStorage.getItem("username");
    return storedId && storedUsername
      ? { id: storedId, username: storedUsername }
      : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("id", userData.id);
    localStorage.setItem("username", userData.username);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("id");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
