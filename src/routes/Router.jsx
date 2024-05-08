import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "profile", element: <ProfilePage /> },
  // {path:"*", element:<NotFoundPage/>},
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
