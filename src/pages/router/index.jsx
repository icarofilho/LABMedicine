//? Providers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//? hooks
import { useSelector } from "react-redux";

//? componentes
import {
  NotFound,
  AddNewPatientComponent,
  DashboardComponent,
  AddNewVaccineComponent,
  VacinationHistoryComponent,
  PatientHistory,
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
        element: <AddNewVaccineComponent />,
      },
      {
        path: "/historico-de-aplicacao",
        element: <VacinationHistoryComponent />,
      },
      {
        path: "/detalhes-de-aplicacao",
        element: <PatientHistory />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export function RoutePage() {
  const { user } = useSelector((state) => state);

  return (
    <>
      {user ? <RouterProvider props={"ola"} router={router} /> : <LoginPage />}
    </>
  );
}
