import { Box, Grid } from "@mui/material";

import { MenuComponent } from "../../components/MenuComponent";

import { Outlet } from "react-router-dom";

export const StartPage = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sx={{ height: "50px", background: "darkgrey" }}>
          Menu
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
