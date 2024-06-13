import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

// function App() {
//   const [recipes, setRecipes] = useState([]);
//   console.log(recipes);

//   return (
//     <div className="App">
//       <Navbar />
//       <SearchBar onSearch={setRecipes} />
//     </div>
//   );
// }

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=29571d4a&app_key=63d060efa6a9df1a240486514bdeb7b2`,
    );
    setRecipes(response.data.hits);
  };

  return (
    <div className="App">
      <Navbar />
      <SearchBar onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
