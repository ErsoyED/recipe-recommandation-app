// ./client/src/components/RecipeSearch.js

import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState(''); // search input
  const [searchResults, setSearchResults] = useState([]); // search results

  const spoonacularApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const handleSearch = async () => {
    try {
      // GET request to use spoonacular API
      const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          apiKey: spoonacularApiKey,
          query: searchQuery,
          addRecipeInformation: true, // Include recipe information
        }, // params
      }); // const response

      const recipeIds = response.data.results.map(recipe => recipe.id); // storing recipe ids to get detailed info from spoonacular

      // use stored ids to get recipe details
      const recipeDetailsPromises = recipeIds.map(id =>
        axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
          params: { apiKey: spoonacularApiKey }
        })
      );

      const recipeDetails = await Promise.all(recipeDetailsPromises); // wait for all recipe details to be fetched

      setSearchResults(recipeDetails.map(res => res.data)); // update data with recipe details 
    } // try 
    catch (error) {
      console.error('Error fetching recipes from Spoonacular:', error);
    } // catch
  }; // const handleSearch

  const saveRecipe = async (recipe) => {
    try {
      const savedRecipe = {
        name: recipe.title, // name
        ingredients: recipe.extendedIngredients.map(ingredient => ingredient.original), // ingredients
        instructions: recipe.instructions || "No instructions provided", // show "no instructions provided" if there are none
        image: recipe.image,  // image url, if one is available
      }; // const savedRecipe

      // POST to save chosen the recipe in MongoDB from search results
      await axios.post('http://localhost:5001/api/recipes', savedRecipe);
      alert('Recipe saved successfully!'); // alert for user
    } // try 
    catch (error) { // error handling
      console.error('Error saving recipe:', error);
      alert('Error saving the recipe.');
    } // catch
  }; // const saveRecipe

  return (
    <div>
      <h1>Search for a Recipe with Spoonacular</h1>
      {/* search field */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="e.g., pizza, pasta, cookies"
      />
      <button onClick={handleSearch}>Search</button>

      {/* recipe results */}
      <div>
        {searchResults.map((recipe) => (
          <div key={recipe.id}>
            {/* recipe image, only show if one exists */}
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '300px' }} />
            )} {/* recipe image */}
            {/* recipe name */}
            <h2>{recipe.title}</h2>
            {/* recipe ingredients */}
            <h3><strong>Ingredients:</strong></h3>
            <ul>
              {recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.original}</li>
              ))} {/* recipe ingredients */}
            </ul>
            {/* recipe instructions, rendering HTML pulled in from Spoonacular if necessary */}
            <h3><strong>Instructions:</strong></h3>
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />

            {/* save recipe button under each result to save to recipe list */}
            <button onClick={() => saveRecipe(recipe)}>Save to My Recipes</button>
          </div>
        ))} {/* searchResults */}
      </div>
    </div>
  ); // return
}; // const RecipeSearch

export default RecipeSearch;
