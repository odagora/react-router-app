import { useRoutes } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { BlogPage } from "../components/BlogPage";
import { ProfilePage } from "../components/ProfilePage";
import { BlogPost } from "../components/BlogPost";
import { LoginPage } from "../components/LoginPage";
import { LogoutPage } from "../components/LogoutPage";
import { AuthRoute } from "../context/auth";
import { PostForm } from "../components/PostForm";

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
          element: <BlogPost />
        },
        {
          path: "create",
          element: (
            <AuthRoute>
              <PostForm />
            </AuthRoute>
          )
        },
        {
          path: ":slug/edit",
          element: (
            <AuthRoute>
              <PostForm />
            </AuthRoute>
          )
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
    {
      path: '*',
      element: <p>Route not found</p>
    }
  ]);

  return element;
}
