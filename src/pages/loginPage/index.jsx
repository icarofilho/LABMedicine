import { LoginFormComponent } from "../../components/LoginFormComponent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Box } from "@mui/material";
import Logo from "../../assets/medic-login.svg";

export function LoginPage() {
  const smMediaQuery = useMediaQuery("(min-width:800px)");

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <Container maxWidth="xl" sx={{ ...style }}>
      {smMediaQuery && (
        <Box sx={{ display: "flex", width: "50vw" }}>
          <img src={Logo} width="100%" />
        </Box>
      )}
      <LoginFormComponent />;
    </Container>
  );
}
