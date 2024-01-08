import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
import TestScreen from "../pages/TestScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "/test",
        element: <TestScreen />,
      },
    ],
  },
]);
