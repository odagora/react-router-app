import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="">Escribe tu nombre de usuario:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
