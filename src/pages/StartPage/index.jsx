import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MenuComponent } from "../../components/MenuComponent";

import { Outlet } from "react-router-dom";

import { ToolbarContainer, ProfileContainer } from "./styles";

export const StartPage = () => {
  const { userName } = useSelector((state) => state);
  const { pathname } = useLocation();
  console.log("username", userName);

  const urlNames = {
    "/": "Página principal",
    "/cadastrar-paciente": "Cadastrar Paciente",
    "/cadastrar-vacina": "Cadastrar Vacina",
    "/historico-de-aplicacao": "Listagem de Histórico de Aplicação",
    "/detalhes-de-aplicacao":
      "Página de Detalhamento do Histórico de Aplicação",
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sx={{ height: "50px", background: "darkgrey" }}>
          <ToolbarContainer>
            <h1 style={{ fontSize: "26px" }}>{urlNames[pathname]}</h1>
            <ProfileContainer>
              <h2>{userName} </h2>
              <AccountCircleIcon sx={{ fontSize: 40 }} />
            </ProfileContainer>
          </ToolbarContainer>
        </Grid>
        <Grid item xs={2} sx={{ minWidth: "220px" }}>
          <MenuComponent />
        </Grid>
        <Grid item xs>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};
