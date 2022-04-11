import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TvIcon from "@mui/icons-material/Tv";
import { useNavigate } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import DrawerComponent from "./DrawerComponent";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../utils/theme";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(0);
  let navigate = useNavigate();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <TvIcon />
            </IconButton>
            {!isMatch && (
              <Tabs
                sx={{
                  "&& .Mui-selected": {
                    // && are used to increase the specificity
                    color: theme.palette.secondary.main,
                  },
                }}
                value={value}
                onChange={handleChange}
              >
                <Tab
                  value={0}
                  icon={<LocalMoviesIcon />}
                  label="Movies"
                  onClick={() => navigate("/")}
                />
                <Tab
                  value={1}
                  icon={<TrendingUpIcon />}
                  label="Trending"
                  onClick={() => navigate("/trending")}
                />
                <Tab
                  value={2}
                  icon={<MovieFilterIcon />}
                  label="TV Series"
                  onClick={() => navigate("/series")}
                />
              </Tabs>
            )}
            <MenuIcon
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{ marginLeft: "auto", cursor: "pointer" }}
            />
          </Toolbar>
        </AppBar>
        {isMatch && (
          <DrawerComponent
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            value={value}
            handleChange={handleChange}
          />
        )}
      </Box>
      {/* <Outlet /> */}
    </>
  );
};

export default NavBar;
