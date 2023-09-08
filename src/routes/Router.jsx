import { useRoutes } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { BlogPage } from "../components/BlogPage";
import { ProfilePage } from "../components/ProfilePage";
import { BlogPost } from "../components/BlogPost";
import { LoginPage } from "../components/LoginPage";
import { LogoutPage } from "../components/LogoutPage";
import { AuthRoute } from "../context/auth";

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
      element: (
        <AuthRoute>
          <ProfilePage />
        </AuthRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/logout",
      element: (
        <AuthRoute>
          <LogoutPage />
        </AuthRoute>
      ),
    },
  ]);

  return element;
}
