import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="Header-appbar" position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h3"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <b>Recipe finder</b>
          </Typography>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Find the best recipes from around the world!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
