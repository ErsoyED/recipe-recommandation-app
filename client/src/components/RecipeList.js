// ./client/src/components/RecipeList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe._id}>
          <h2>{recipe.name}</h2>
          <p>Instructions: {recipe.instructions}</p>
          <p>Ingredients: {recipe.ingredients.join(', ')}</p>
        </li>
      ))}
    </ul>
  ); // return 
} // RecipeList

export default RecipeList;