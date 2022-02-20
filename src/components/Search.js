import React from "react";
import TextField from "@mui/material/TextField";
import "../App.css";
const Search = () => {
  return (
    <>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </>
  );
};

export default Search;
