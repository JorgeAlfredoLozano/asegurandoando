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
import Autos from "./components/Pages/Seguros/Seccion2/Autos.jsx"
import "./index.css";
import Hogar from "./components/Pages/Seguros/Seccion2/Hogar.jsx";
import Comercio from "./components/Pages/Seguros/Seccion2/Comercio.jsx";
import Gestoria from "./components/Pages/Gestoría/Gestoria.jsx";

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
        path: "/autos",
        element: <Autos />,
      },
      {
        path: "/transporte",
        element: <Contacto origen="Transporte"/>,
      },
      {
        path: "/hogar",
        element: <Hogar />,
      },
      {
        path: "/comercio",
        element: <Comercio />,
      },
      {
        path: "/ap",
        element: <Contacto origen="Ap"/>,
      },
      {
        path: "/salud",
        element: <Contacto origen="Salud" />,
      },
      {
        path: "/gestoria",
        element: <Gestoria />,
      },
      {
        path: "/gestoria",
        element: <Contacto origen="Gestoria" />,
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
