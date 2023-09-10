//? hooks
import { useEffect, useState } from "react";

//? Database Models
import Patients from "../../database/models/patients";

//? Components
import { PatientCardComponent } from "./PatientCardComponent";

//? Mui
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Grid,
  Input,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

export function DashboardComponent() {
  const [dashboardData, setDashboardData] = useState(null);

  const [patients, setPatients] = useState([]);
  const [searchPatient, setSearchPatient] = useState(null);

  useEffect(() => {
    async function renderDashboard() {
      console.log("renderDashboard");
    }
    renderDashboard();
    async function getPatients() {
      console.log("getPatients");
      const data = await Patients.findAll();
      console.log("patients: ", data);
      setPatients(data);
      return data;
    }
    getPatients();

    function buildDashboardData() {
      // console.log("patients", patients);
      const data = [];
      const patient = {
        title: "Pacientes",
        accounts: patients?.length,
      };
      data.push(patient);
      setDashboardData(data);
    }
  }, []);

  function handleSearchPatient(event) {
    const select = document.getElementById("type-of-search").value;
    console.log("select: ", select);
    //? valor do input
    const input = event.target.value;
    //? filtragem dos dados
    const searchData = patients.filter((patient) =>
      patient[select].toLowerCase().includes(input.toLowerCase())
    );

    //? condição para preenchimento
    if (input.length === 0) {
      //? caso não tenha nenhum valor ou limpe o campo, o valor da pesquisa será null
      setSearchPatient(null);
    } else {
      setSearchPatient(searchData);
    }
  }

  return (
    <Grid
      container
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Grid item xs={12}>
        DASHBOARD
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <select id="type-of-search" label="Buscar por">
            <option value={"name"}>Nome</option>
            <option value={"cpf"}>CPF</option>
          </select>
          <Grid item xs={9}>
            <TextField
              xs={9}
              label="Buscar Paciente"
              variant="outlined"
              sx={{
                margin: "7px",
                width: "100%",
              }}
              onChange={() => handleSearchPatient(event)}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* { Container de cards} */}
      <Grid
        container
        sx={{
          display: "flex",
          gap: "15px",
          width: "100%",

          justifyContent: "space-around",
        }}
      >
        {/* Carregamento de pacientes filtrados */}
        {searchPatient &&
          searchPatient?.map((patient, index) => {
            return (
              <PatientCardComponent
                key={"card-component-" + index}
                name={patient.name}
                _id={String(patient.id).padStart(4, "0")}
                gender={patient.gender}
                age={patient.age}
                allergies={patient.allergies}
                born_at={patient.born_at}
              />
            );
          })}
        {/* Carregamento de pacientes */}
        {patients &&
          !searchPatient &&
          patients?.map((patient, index) => {
            return (
              <PatientCardComponent
                key={"card-component-" + index}
                name={patient.name}
                _id={String(patient.id).padStart(4, "0")}
                gender={patient.gender}
                age={patient.age}
                allergies={patient.allergies}
                born_at={patient.born_at}
              />
            );
          })}
        {/* Quando nenhum paciente for encontrado nos dados principais  */}
        {!patients && <h2>Nenhum paciente cadastrado</h2>}
        {/* Quando nenhum paciente for encontrado na filtragem */}
        {patients && searchPatient != null && searchPatient.length == 0 && (
          <h2>Nenhum paciente localizado</h2>
        )}
      </Grid>
    </Grid>
  );
}
