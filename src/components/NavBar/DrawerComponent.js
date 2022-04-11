import React from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Box,
} from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import theme from "../../utils/theme";
import { useNavigate } from "react-router-dom";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const style = {
    color: "black",
  };

  const navigate = useNavigate();

  return (
    <Box>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <List sx={{ color: "white" }}>
          <ListItem
            button
            key={0}
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <LocalMoviesIcon style={style} />
            </ListItemIcon>
            <ListItemText primary="Movies" style={style}></ListItemText>
          </ListItem>
          <ListItem
            button
            key={1}
            onClick={() => {
              navigate("/trending");
            }}
          >
            <ListItemIcon>
              <TrendingUpIcon style={style} />
            </ListItemIcon>
            <ListItemText primary="Trending" style={style}></ListItemText>
          </ListItem>
          <ListItem
            button
            key={2}
            onClick={() => {
              navigate("/series");
            }}
          >
            <ListItemIcon>
              <MovieFilterIcon style={style} />
            </ListItemIcon>
            <ListItemText primary="Series" style={style}></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
export default DrawerComponent;
