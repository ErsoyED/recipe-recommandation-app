// ./client/src/components/RecipeList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]); // storing fetched recipes

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => { // async function to fetch the recipes from the backend API
      try {
        const response = await axios.get('http://localhost:5001/api/recipes'); // GET request to the backend API to fetch recipes
        setRecipes(response.data); // update the recipes state with the fetched recipes
      } // try
      catch (error) { // error handling
        console.error('Error fetching recipes:', error);
      } // catch
    }; // fetchRecipes

    fetchRecipes(); // API call
  }, // =>
  [] // empty array to ensure useEffect only runs once
); // useEffect

  // if there are no recipes
  if (recipes.length === 0) {
    return <p>No recipes found</p>;
  } // if  

  return (
    <div>
      <h2>My Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            {/* recipe name */}
            <h3>
              <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
} // RecipeList

export default RecipeList;