import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  GroupAdd as GroupAddIcon,
  Assignment as AssignmentIcon,
  Colorize as ColorizeIcon,
  Logout as LogoutIcon,
  Inventory as InventoryIcon,
  CloseFullscreen as CloseFullscreenIcon,
  OpenInFull as OpenInFullIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { logout } from "../../store/reducer/loginSlice";
import { useDispatch } from "react-redux";

export function MenuComponent() {
  const dispatch = useDispatch();
  const [hideMenu, setHideMenu] = useState(false);
  const [menuSize, setMenuSize] = useState("220");

  const handleChangeMenuSize = () => {
    setHideMenu((state) => !state);
    hideMenu ? setMenuSize("220") : setMenuSize("55");
  };

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
    dispatch(logout());
    navigate("/");
  }

  function handleNavigate(page) {
    navigate(page);
  }
  return (
    <Box
      sx={{
        width: `${menuSize}px`,
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <ListItem sx={{ margin: 0, padding: 0 }}>
            <ListItemButton alignItems="center" onClick={handleChangeMenuSize}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                {!hideMenu ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
                {!hideMenu && "Fechar menu"}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </div>
        {menuItens.map((item) => (
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
                {!hideMenu && item.title}
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
              {!hideMenu && "Sair"}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
