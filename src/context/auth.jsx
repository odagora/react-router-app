import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const users = [
  {
    id: 1,
    name: "daniel-c",
    role: "admin",
  },
  {
    id: 2,
    name: "odagora",
    role: "editor",
  },
  {
    id: 3,
    name: "daniel",
    role: "user",
  },
  {
    id: 4,
    name: "odagora-c",
    role: "editor",
  },
];

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username }) => {
    const adminUsers = users.filter((user) => user.role === "admin");
    const editorUsers = users.filter((user) => user.role === "editor");

    const isAdmin = adminUsers.find((user) => user.name === username);
    const isEditor = editorUsers.find((user) => user.name === username);

    setUser({ username, isAdmin, isEditor });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };
  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function AuthRoute({ children }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export { AuthContext, AuthProvider, AuthRoute };
