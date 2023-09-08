import React from "react";
import { useAuth } from "../hooks/useAuth";

export const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();

    auth.logout();
  };
  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label htmlFor="">¿Seguro que quieres salir?</label>
        <button type="submit">Salir</button>
      </form>
    </>
  );
};
