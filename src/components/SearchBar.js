import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setRecipes }) => {
  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=29571d4a&app_key=63d060efa6a9df1a240486514bdeb7b2`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <TextField
      className="search-bar"
      label="Search for recipes"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchBar;
