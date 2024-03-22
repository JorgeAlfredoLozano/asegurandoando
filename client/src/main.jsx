import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Asistencia from "./components/Pages/Asistencia/Asistencia";
import Contacto from "./components/Pages/Contacto/Contacto";
import Seguros from "./components/Pages/Seguros/Seguros.jsx";
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
      {
        path: "/asistencia",
        element: <Asistencia />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      {
        path: "/seguros",
        element: <Seguros />,
      },
      {
        path: "*",
        element: (
          <h1>
            Estamos trabajando en esta página, por cualquier consulta dirijase a
            contacto. 😀
          </h1>
        ),
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
