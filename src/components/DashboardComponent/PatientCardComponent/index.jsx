//? Mui
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
//?
import { ageCalculation } from "../../../utils/dates";
import {
  Female as FemaleIcon,
  Transgender as TransgenderIcon,
  Male as MaleIcon,
  Block as BlockIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";

export const PatientCardComponent = ({
  _id,
  name,
  gender,
  allergies,
  born_at,
}) => {
  console.log("allergies", allergies);
  let icon;
  switch (gender.toLowerCase()) {
    case "masculino":
      icon = <MaleIcon fontSize="small" />;
      break;
    case "feminino":
      icon = <FemaleIcon fontSize="small" />;
      break;
    case "transgênero":
      icon = <TransgenderIcon fontSize="small" />;
      break;

    default:
      icon = <BlockIcon fontSize="small" />;
      break;
  }
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 600,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          color="text.secondary"
          variant="h6"
        >
          {_id} {icon} {name}
        </Typography>
        <Box sx={{ display: "flex", gap: "12px" }}>
          <Box>
            <Typography variant="h7" component="div">
              Idade:
            </Typography>

            <Typography sx={{ mb: 0.5, fontSize: "12" }} color="text.secondary">
              {ageCalculation(born_at)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h7" component="div">
              Nascimento:
            </Typography>

            <Typography sx={{ mb: 0.5, fontSize: "12" }} color="text.secondary">
              {born_at}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h7" component="div">
          Alergias:
        </Typography>

        <Typography sx={{ mb: 0.5, fontSize: "12" }} color="text.secondary">
          {allergies.length > 3
            ? allergies.slice(0, 3).concat("outros...").join(", ")
            : allergies.join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="success"
          variant="contained"
          startIcon={<VisibilityIcon />}
        >
          Ver Mais...
        </Button>
      </CardActions>
    </Card>
  );
};
