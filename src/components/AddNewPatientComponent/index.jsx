import { Box, Grid, Button } from "@mui/material";
import * as styled from "./styles";
import Axios from "../../requests";
import { useState } from "react";
//? Database Models
import Patients from "../../database/models/patients";

export function AddNewPatientComponent() {
  const [address, setAddress] = useState({ street: "" });
  async function getAddress() {
    const data = await Axios.viaCep(21931160);
    console.log(data);
    setAddress(data);
  }

  async function createPatient() {
    await Patients.create();
  }
  return (
    <form>
      <Grid container>
        <Grid item xs={12}>
          <styled.Input type="text" placeholder="Nome completo" />
        </Grid>
        <select defaultValue="Genero">
          <option value="Genero" disabled>
            Genero
          </option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="transgenero">Transgenero</option>
          <option value="outro">Outro</option>
        </select>
        <styled.Input type="date" />
        <styled.Input type="number" />
        <styled.Input placeholder="cpf" type="text" />
        <styled.Input placeholder="rg" type="text" />
        <styled.Input type="text" placeholder="Órgão" />
        <select defaultValue={"Estado Civil"}>
          <option value="estado civil" disabled>
            Estado Civil
          </option>
          <option value="solteiro">Solteiro</option>
          <option value="casado">Casado</option>
          <option value="separado">Separado</option>
          <option value="divorciado">Divorciado</option>
          <option value="viuvo">Viúvo</option>
        </select>
        <styled.Input type="number" placeholder="(99) 9 9999-9999" />
        <styled.Input type="email" />
        <styled.Input type="number" placeholder="(99) 9 9999-9999" />
        <textarea
          type="text"
          placeholder="Alergias devem ser separadas por virgula"
        />
        <Grid item xs={12}>
          <styled.Input type="number" placeholder="99888777" />
          <styled.Input type="button" onClick={getAddress} value="buscar" />
          <styled.Input
            type="text"
            placeholder={address.street || "Logradouro"}
            readOnly
            disabled
          />
          <styled.Input type="text" placeholder="Número" />
          <styled.Input
            type="text"
            placeholder="Complemento"
            title="Caso não haja um complemento deixe este campo em branco"
          />
          <styled.Input
            type="text"
            placeholder={address.neighborhood || "Bairro"}
            readOnly
            disabled
          />
          <styled.Input
            type="text"
            placeholder={address.city || "Cidade"}
            readOnly
            disabled
          />
          <styled.Input
            type="text"
            placeholder={address.state || "Estado"}
            readOnly
            disabled
          />
        </Grid>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "end",
            }}
          >
            <Button variant="contained" color="info" onClick={createPatient}>
              Cadastrar
            </Button>
            <Button
              variant="outlined"
              disabled
              sx={{
                margin: "0 10px",
              }}
            >
              Editar
            </Button>
            <styled.Button variant="outlined" disabled>
              Deletar
            </styled.Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
