import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Layouts/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404</h1>,
  },
]);
