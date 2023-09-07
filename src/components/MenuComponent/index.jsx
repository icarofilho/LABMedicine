import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import {
  Home as HomeIcon,
  GroupAdd as GroupAddIcon,
  Assignment as AssignmentIcon,
  Colorize as ColorizeIcon,
  Logout as LogoutIcon,
  Inventory as InventoryIcon,
} from "@mui/icons-material";

export function MenuComponent() {
  const navigate = useNavigate();
  const menuItens = [
    { title: "Pagina Inicial", link: "/", icon: <HomeIcon /> },
    {
      title: "Cadastrar Paciente",
      link: "cadastrar-paciente",
      icon: <GroupAddIcon />,
    },
    {
      title: "Cadastrar Vacina",
      link: "cadastrar-vacina",
      icon: <ColorizeIcon />,
    },
    {
      title: "Histórico de Aplicação",
      link: "historico-de-aplicacao",
      icon: <AssignmentIcon />,
    },
    {
      title: "Detalhes de Aplicação",
      link: "detalhes-de-aplicacao",
      icon: <InventoryIcon />,
    },
  ];

  function handleLogOut() {
    console.log("Sair");
  }

  function handleNavigate(page) {
    navigate(page);
  }
  return (
    <Box
      sx={{
        width: "220px",
        height: "calc(100vh - 50px)",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
      }}
    >
      <List>
        {menuItens.map((item, index) => (
          <ListItem key={item.link} sx={{ margin: 0, padding: 0 }}>
            <ListItemButton onClick={() => handleNavigate(item.link)}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "space-around",
                  gap: "10px",
                  width: "100%",
                }}
              >
                {/* <Link></Link> */}
                {item.icon}
                {item.title}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem sx={{ margin: 0, padding: 0 }}>
          <ListItemButton onClick={handleLogOut}>
            <ListItemIcon
              sx={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-around",
                gap: "10px",
                width: "100%",
              }}
            >
              <LogoutIcon />
              Sair
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
