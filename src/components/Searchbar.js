import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");

  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=29571d4a&app_key=%2063d060efa6a9df1a240486514bdeb7b2`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      fetchRecipes();
    }
  }

  return (
    <TextField
      className="search-bar"
      label="Search for recipes"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
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
