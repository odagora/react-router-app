import { useRoutes } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { BlogPage } from "../components/BlogPage";
import { ProfilePage } from "../components/ProfilePage";
import { BlogPost } from "../components/BlogPost";
import { LoginPage } from "../components/LoginPage";
import { LogoutPage } from "../components/LogoutPage";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
      children: [
        {
          path: ":slug",
          element: <BlogPost />,
        },
      ],
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/logout",
      element: <LogoutPage />,
    },
  ]);

  return element;
}
