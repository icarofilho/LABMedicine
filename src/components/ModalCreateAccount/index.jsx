import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  Modal,
  Typography,
  Button,
  Box,
  FormGroup,
  TextField,
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

  const handleClearInputs = () => {
    document.querySelector("#signup-email").value = null;
    document.querySelector("#signup-pass").value = null;
    document.querySelector("#signup-confirm").value = null;
  };

  const handleSignUp = () => {
    console.log("entrou");
    const email = document.querySelector("#signup-email").value;
    const pass = document.querySelector("#signup-pass").value;
    const confirm = document.querySelector("#signup-confirm").value;

    if (pass != confirm) {
      setPasswordOK(true);
      return;
    }
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
    </div>
  );
}
