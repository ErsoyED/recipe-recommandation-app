// ./client/src/components/RecipeDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams(); // retrieve id 
  const [recipe, setRecipe] = useState(null); // storing fetched recipe

  // useEffect to fetch recipe data when the component mounts or when the id changes
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/recipes/${id}`); // GET request to backend to fetch recipe based on ID
        setRecipe(response.data); // update the recipe state with the fetched recipe
      } // try
      catch (err) { // error handling
        console.error("Error fetching recipe:", err);
      } // catch
    }; // fetchRecipe

    fetchRecipe(); // API call
  }, // =>
  [id] // effect runs when id changes
); // useEffect

  if (!recipe) {
    return <p>Loading...</p>;
  } // if

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  ); // return
}; // RecipeDetail

export default RecipeDetail;