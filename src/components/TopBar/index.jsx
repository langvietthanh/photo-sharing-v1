import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import "./styles.css";

function TopBar ({contentTopBar}) {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Lăng Viết Thành - B23DCCN768
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h5" color="inherit">
            {contentTopBar}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default TopBar;
  

