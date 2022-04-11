import React from "react";
import { Box, Pagination } from "@mui/material";
import theme from "../utils/theme";

const AppPagination = ({ setPage, pageNumber }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Pagination
        onChange={(e) => handleChange(e.target.textContent)}
        variant="outlined"
        count={pageNumber}
      />
    </Box>
  );
};

export default AppPagination;
