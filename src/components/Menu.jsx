import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false,
  dynamic: false
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
  dynamic: false
});
routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
  dynamic: true,
});
routes.push({
  to: "/login",
  text: "Login",
  private: false,
  publicOnly: true,
  dynamic: false
});
routes.push({
  to: "/logout",
  text: "Logout",
  private: true,
  dynamic: false
});

export const Menu = () => {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.private && !auth.user) return null;

          if (route.publicOnly && auth.user) return null;

          return (
            <li key={route.text}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "yellow" : "white",
                })}
                to={route.dynamic && auth.user ? `${route.to}/${auth.user.username}`: route.to}
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
