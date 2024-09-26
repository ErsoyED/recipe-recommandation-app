// ./client/src/components/RecipeDetail.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

// showing details of recipe
const RecipeDetail = () => {
  const { id } = useParams(); // retrieve id 
  const [recipe, setRecipe] = useState(null); // storing fetched recipe
  const navigate = useNavigate();

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

  // function to delete a recipe
  const recipeDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/recipes/${id}`); // delete request based on id
      navigate('/'); // navigate back to homepage after deletion
    } // try
    catch (err) { // error handling
      console.error("Error deleting recipe:", err);
    } // catch
  }; // const handleDelete

  if (!recipe) {
    return <p>No recipe matches this ID. Please check the ID and try again.</p>; // message if there is no recipe matching that id
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

      {/* Add Edit Recipe button */}
      <Link to={`/edit-recipe/${id}`}>
        <button>Edit Recipe</button>
      </Link>

      {/* Add a Delete Button */}
      <button onClick={recipeDelete}>Delete Recipe</button>
    </div>
  ); // return
}; // RecipeDetail

export default RecipeDetail;