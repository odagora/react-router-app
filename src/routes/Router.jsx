import { useRoutes } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { BlogPage } from "../components/BlogPage";
import { ProfilePage } from "../components/ProfilePage";
import { BlogPost } from "../components/BlogPost";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
    },
    {
      path: "/blog/:slug",
      element: <BlogPost />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
  ]);

  return element;
}
