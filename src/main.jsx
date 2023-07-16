import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import GameSelectHome from "./screens/GameSelectHome";
import GameModeDescription from "./screens/GameModeDescription";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayerSelect from "./screens/PlayerSelect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GameSelectHome />,
  },
  {
    path: "description",
    // will eventually have an id
    element: <GameModeDescription />,
  },
  {
    path: "playerselect",
    element: <PlayerSelect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
