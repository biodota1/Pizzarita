import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";

const router = createBrowserRouter([
  { path: "*", Component: Root },
  { path: "/", Component: Home },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return <></>;
}
