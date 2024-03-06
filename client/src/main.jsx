import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Asistencia from "./components/Pages/Asistencia/Asistencia";
import Contacto from "./components/Pages/Contacto/Contacto";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/asistencia",
      //   element: <Asistencia />,
      // },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      // {
      //   path: "/seguros",
      //   element: <Seguros />,
      // },
      {
        path: "*",
        element: <h1>Estamos trabajando en esta página, por cualquier consulta dirijase a contacto. 😀</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
