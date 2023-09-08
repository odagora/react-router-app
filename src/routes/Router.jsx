import { useRoutes } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { BlogPage } from "../components/BlogPage";
import { ProfilePage } from "../components/ProfilePage";

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
      path: "/profile",
      element: <ProfilePage />,
    },
  ]);

  return element;
}
