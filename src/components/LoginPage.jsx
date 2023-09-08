import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth.login({ username });
  };
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
