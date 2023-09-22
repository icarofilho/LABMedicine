import {
  InputLabel,
  Input,
  FormHelperText,
  FormGroup,
  Box,
  Container,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

import { ContainerStyle, ButtonStyle, ButtonCliqueAquiStyle } from "./style";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducer/loginSlice";
import { setName } from "../../store/reducer/userNameSlice";

import { BasicModal } from "../ModalCreateAccount";

import Account from "../../database/models/account";

export function LoginFormComponent() {
  const dispatch = useDispatch();

  const [hasInputLoginError, setInputLoginError] = useState(false);
  const [isInputLoginEmpty, setInputLoginEmpty] = useState(false);
  const [hasInputPasswordError, setInputPasswordError] = useState(false);
  const [isInputPasswordEmpty, setInputPasswordEmpty] = useState(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const [inputLoginValue, setLoginValue] = useState("");
  const [inputPasswordValue, setPasswordValue] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogin = async () => {
    if (!inputLoginValue) {
      setInputLoginError(true);
      setInputLoginEmpty(true);
    }

    if (!inputPasswordValue) {
      setInputPasswordEmpty(true);
      setInputPasswordError(true);
    }

    const isLoginValid = await Account.auth(
      inputLoginValue,
      inputPasswordValue
    );

    if (isLoginValid) dispatch(setName(inputLoginValue));
    if (isLoginValid) return dispatch(login());

    setInputLoginError(true);
    setInputPasswordError(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFocusOutPassword = (e) => {
    if (!e.target.value) {
      setInputPasswordEmpty(true);
      setInputPasswordError(true);
      return;
    }

    setInputPasswordEmpty(false);
    setInputPasswordError(false);
    return;
  };

  const handleFocusOutLogin = (e) => {
    if (!e.target.value) {
      setInputLoginError(true);
      setInputLoginEmpty(true);
      return;
    }
    setInputLoginError(false);
    setInputLoginEmpty(false);
    return;
  };

  const handleChangeInputLoginValue = (e) => {
    setLoginValue(e.target.value);
  };

  const handleChangeInputPasswordValue = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container maxWidth="xs" sx={{ ...ContainerStyle }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={() => handleSubmit(event)}
      >
        <FormGroup>
          <InputLabel htmlFor="input-login">Email</InputLabel>
          <Input
            id="input-login"
            error={hasInputLoginError}
            onBlur={() => handleFocusOutLogin(event)}
            onChange={handleChangeInputLoginValue}
          />
          {isInputLoginEmpty && (
            <FormHelperText sx={{ color: "red", textAlign: "center" }}>
              Campo de e-mail não pode estar vazio
            </FormHelperText>
          )}
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="input-password">Senha</InputLabel>
          <Input
            id="input-password"
            error={hasInputPasswordError}
            onBlur={() => handleFocusOutPassword(event)}
            onChange={handleChangeInputPasswordValue}
          />
          {isInputPasswordEmpty && (
            <FormHelperText sx={{ color: "red", textAlign: "center" }}>
              Campo de senha não pode estar vazio
            </FormHelperText>
          )}
          <Box sx={{ ...ButtonStyle }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => handleLogin()}
            >
              Entrar
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleOpenModal}
            >
              Criar conta
            </Button>
          </Box>
        </FormGroup>
        <span>
          Esqueceu sua senha ?{" "}
          <button
            onClick={() => setSnackbarOpen(true)}
            style={{ ...ButtonCliqueAquiStyle }}
          >
            Clique aqui
          </button>{" "}
          para resetar sua senha.
        </span>
      </Box>
      <Snackbar
        open={isSnackbarOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
        // message="Redefinição de senha indisponível"
        // action={action}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Redefinição de senha indisponível
        </Alert>
      </Snackbar>
      {isModalOpen && (
        <BasicModal isModalOpen handleCloseModal={handleCloseModal} />
      )}
    </Container>
  );
}
