import "./App.css";
import { Searchbar } from "./components/Searchbar.js";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import { RecipesList } from "./components/RecipesList.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  return (
    <div className="App">
      <Navbar />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
