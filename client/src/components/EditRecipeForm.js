// ./client/src/components/EditRecipeForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
  const { id } = useParams(); // getting recipe id from url
  const [name, setName] = useState(''); // name
  const [ingredients, setIngredients] = useState(''); // ingredients
  const [instructions, setInstructions] = useState(''); // instructions
  const [image, setImage] = useState(''); // image
  const navigate = useNavigate();

  useEffect(() => { // useEffect to fet recipe by id when component mounts
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/recipes/${id}`); // GET request to fetch recipe using its id
        setImage(response.data.image);
        setName(response.data.name);
        setIngredients(response.data.ingredients.join(', ')); // joins ingredient array with commas
        setInstructions(response.data.instructions);
      } // try
      catch (err) { // error handling
        console.error('Error fetching recipe:', err);
      } // catch
    }; // const fetchRecipe
    fetchRecipe(); 
  }, // => 
  [id] // only runs useEffect when id changes
); // useEffect

  const handleSubmit = async (e) => { // form submission for updating recipe
    e.preventDefault();
    const updatedRecipe = {
      image,
      name,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions,
    }; // const updatedRecipe

    try {
      await axios.put(`http://localhost:5001/api/recipes/${id}`, updatedRecipe); // PUT request to update recipe by id
      navigate(`/recipe/${id}`); // redirects user to recipe detail page
    } // try
    catch (err) { // error handling
      console.error('Error updating recipe:', err);
    } // catch
  }; // const handleSubmit

  // below renders edit form
  return (
    <form onSubmit={handleSubmit}>
      {/* recipe image */}
      <div>
        <label>Recipe Image URL: </label>
        <textarea 
          type="text" 
          value={image} 
          onChange={(e) => setImage(e.target.value)}
          placeholder="(Optional)"
        />
      </div>
      {/* recipe name */}
      <div>
        <label>Recipe Name: </label>
        <textarea 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Pepperoni Pizza"
        />
      </div>
      {/* recipe ingredients */}
      <div>
        <label>Ingredients (comma separated): </label>
        <textarea 
          type="text" 
          value={ingredients} 
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g., Pizza dough, Pizza sauce, Mozzarella cheese, Pepperoni" 
        />
      </div>
      {/* recipe instructions */}
      <div>
        <label>Instructions: </label>
        <textarea 
          value={instructions} 
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="e.g., Put sauce, cheese and pepperonis on the pizza dough in that order. Bake at 400F for 30 mins."
        />
      </div>
      {/* update recipe button */}
      <button type="submit">Update Recipe</button>
    </form>
  ); // return
}; // const EditRecipeForm

export default EditRecipeForm;