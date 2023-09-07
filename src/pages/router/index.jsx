//? Providers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//? hooks
import { useEffect } from "react";
import { useSelector } from "react-redux";

//? componentes
import {
  NotFound,
  AddNewPatientComponent,
  DashboardComponent,
} from "../../components";

//? Pages
import { LoginPage, StartPage } from "../";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    children: [
      {
        path: "/",
        element: <DashboardComponent />,
      },
      {
        path: "/cadastrar-paciente",
        element: <AddNewPatientComponent />,
      },
      {
        path: "/cadastrar-vacina",
        element: <AddNewPatientComponent />,
      },
      {
        path: "/historico-de-aplicacao",
        element: <AddNewPatientComponent />,
      },
      {
        path: "/detalhes-de-aplicacao",
        element: <AddNewPatientComponent />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  ,
]);

export function RoutePage() {
  const { user } = useSelector((state) => state);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <>{!user ? <RouterProvider router={router} /> : <LoginPage />}</>;
}
