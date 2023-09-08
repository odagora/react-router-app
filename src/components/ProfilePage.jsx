import React from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthRoute } from "../context/auth";

export const ProfilePage = () => {
  const auth = useAuth();

  return (
    <AuthRoute>
      <h1>Perfil</h1>
      <p>Welcome, {auth.user?.username}</p>
    </AuthRoute>
  );
};
