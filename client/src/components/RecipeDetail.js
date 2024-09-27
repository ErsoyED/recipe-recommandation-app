// ./client/src/components/RecipeDetail.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

// showing details of recipe
const RecipeDetail = () => {
  const { id } = useParams(); // retrieve id from URL
  const [recipe, setRecipe] = useState(null); // storing fetched recipe
  const [spoonacularData, setSpoonacularData] = useState(null); // store fetched data from Spoonacular API
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
    return <p>Loading...</p>; // default loading message to look nice
  } // if

  return (
    <div>
      {/* recipe image, only show if one was added */}
      {recipe.image && (
        <img src={recipe.image} alt={recipe.name} style={{ maxWidth: '300px' }} />
      )} {/* recipe image */}
      {/* recipe name */}
      <h1>{recipe.name}</h1>
      {/* recipe ingredients */}
      <h3><strong>Ingredients:</strong></h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))} {/* recipe ingredients */}
      </ul>
      {/* recipe instructions, rendering HTML pulled in from Spoonacular if necessary */}
      <h3><strong>Instructions:</strong></h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      <p></p>

      {/* Edit Recipe button */}
      <Link to={`/edit-recipe/${id}`}>
        <button>Edit Recipe</button>
      </Link>

      {/* Delete Button */}
      <button onClick={recipeDelete}>Delete from My Recipes</button>
    </div>
  ); // return
}; // RecipeDetail

export default RecipeDetail;