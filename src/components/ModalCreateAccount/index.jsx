import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Account from "../../database/models/account";
import {
  Modal,
  Typography,
  Button,
  Box,
  FormGroup,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

import {
  BoxLeftContainer,
  FormGroupContainer,
  TextFieldContainer,
  BoxRightContainer,
  BoxButtonContainer,
} from "./style";

export function BasicModal({ isModalOpen, handleCloseModal }) {
  const [isPasswordOK, setPasswordOK] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);
  const [alertText, setAlertText] = useState(null);

  const handleClearInputs = () => {
    document.querySelector("#signup-email").value = null;
    document.querySelector("#signup-pass").value = null;
    document.querySelector("#signup-confirm").value = null;
  };

  const handleSnackOpen = () => setSnackOpen(true);
  const handleSnackClose = () => setSnackOpen(false);

  const handleSignUp = async () => {
    const email = document.querySelector("#signup-email").value;
    const pass = document.querySelector("#signup-pass").value;
    const confirm = document.querySelector("#signup-confirm").value;
    console.log("pass", pass);
    console.log("confirm", confirm);

    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/;
    const isEmailValid = new RegExp(emailRegex).test(email);

    if (!email || !pass || !confirm) {
      setAlertText("E-mail / Senha não pode estar vazio");
      handleSnackOpen();
      return;
    }

    if (!isEmailValid) {
      setAlertText("E-mail invalido");
      handleSnackOpen();
      return;
    }

    if (pass.length < 10) {
      console.log("entrou aqui");
      setAlertText("Senha com menos de 10 caracteres");
      handleSnackOpen();
      return;
    }

    if (pass != confirm) {
      console.log("entrou");
      setAlertText("Senha Invalida");
      handleSnackOpen();
      return;
    }
    await Account.create(email, pass);
    setPasswordOK(true);
    setAlertText("Conta criada com sucesso!");
    handleSnackOpen();
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };
  return (
    <div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            ...BoxLeftContainer,
          }}
        >
          <FormGroup
            id="formGroupsignup"
            sx={{
              ...FormGroupContainer,
            }}
          >
            <div>
              <TextField
                required
                label="E-mail"
                variant="outlined"
                id="signup-email"
                sx={{ ...TextFieldContainer }}
              />
            </div>
            <div>
              <TextField
                required
                label="Senha"
                id="signup-pass"
                variant="outlined"
                error={isPasswordOK}
                sx={{ ...TextFieldContainer }}
              />
            </div>
            <div>
              <TextField
                required
                label="Repetir Senha"
                variant="outlined"
                id="signup-confirm"
                error={isPasswordOK}
                sx={{ ...TextFieldContainer }}
              />
            </div>
          </FormGroup>
          <Box
            sx={{
              ...BoxRightContainer,
            }}
          >
            <Typography>
              A senha deve conter pelo menos 10 caracteres.
            </Typography>
            <Box
              sx={{
                ...BoxButtonContainer,
              }}
            >
              <Button
                variant="contained"
                size="small"
                startIcon={<AccountCircleIcon />}
                onClick={handleSignUp}
              >
                Criar Conta
              </Button>
              <Button
                variant="contained"
                size="small"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleClearInputs}
              >
                Limpar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={isSnackOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        // message="Redefinição de senha indisponível"
        // action={action}
      >
        <Alert
          onClose={handleSnackClose}
          severity={isPasswordOK ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertText}
        </Alert>
      </Snackbar>
    </div>
  );
}
