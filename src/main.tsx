import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import LevelOne from "./routes/levelOne";
import LevelTwo from "./routes/levelTwo";
import LevelThree from "./routes/levelThree";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/level-1",
    element: <LevelOne />,
  },
  {
    path: "/level-2",
    element: <LevelTwo />,
  },
  {
    path: "/level-3",
    element: <LevelThree />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
