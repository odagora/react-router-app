import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useParams } from "react-router-dom";
import { users } from "../context/auth";

export const ProfilePage = () => {
  const auth = useAuth();
  const { user } = useParams();

  const isLoggedInUser = () => auth.user?.username === user;
  const findUser = () => users.find(existingUser => existingUser.name === user);
  const isAdminUser = () => auth.user?.isAdmin?.role === 'admin';
  const renderEditButton = () => isLoggedInUser() || isAdminUser();

  const renderUserInfo = () => {
    const user = findUser();

    if (user) {
      return (
        <>
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
          <p>Email: {user.email}</p>
        </>
      );
    }
    return <p>User not found</p>;
  };

  return (
    <>
      <h1>Perfil</h1>
      {renderEditButton() && <button>Editar perfil</button>}
      {isLoggedInUser() && (
        <>
          <p>Welcome, {auth.user.username}</p>
          <h2>This is your personal info:</h2>
        </>
      )}
      {renderUserInfo()}
    </>
  );
};
