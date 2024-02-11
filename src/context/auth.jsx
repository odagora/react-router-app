import { createContext, useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [user, setUser] = useState(null);

  const from = location.state?.from?.pathname || "/";

  const login = ({ username }) => {
    const adminUsers = users.filter((user) => user.role === "admin");
    const editorUsers = users.filter((user) => user.role === "editor");

    const isAdmin = adminUsers.find((user) => user.name === username);
    const isEditor = editorUsers.find((user) => user.name === username);

    setUser({ username, isAdmin, isEditor });
    navigate(from, { replace: true });
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
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export { AuthContext, AuthProvider, AuthRoute };
