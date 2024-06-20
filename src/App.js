import "./App.css";
import { Searchbar } from "./components/Searchbar.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import { RecipesList } from "./components/RecipesList.js";
import { theme } from "./themes/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <Searchbar setRecipes={setRecipes} />
        <ThemeProvider theme={theme}>
          <RecipesList recipes={recipes} />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
