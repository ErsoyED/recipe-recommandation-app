// ./client/src/components/AddRecipeForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = ({ onRecipeAdded }) => { // to add a recipe to the database
  const [name, setName] = useState(''); // name
  const [ingredients, setIngredients] = useState(''); // ingredient
  const [instructions, setInstructions] = useState(''); // instructions
  const navigate = useNavigate();

  const handleSubmit = async (e) => { // form submission
    e.preventDefault();

    try {
      const newRecipe = { // new recipe object
        name,
        ingredients: ingredients.split(',').map(item => item.trim()),  // allows ingredients to be split by commas
        instructions
      }; // const newRecipe

      await axios.post('http://localhost:5001/api/recipes', newRecipe); // POST request to add the new recipe to the database

      navigate('/'); // navigate back to the home screen after adding the recipe
      
      if (onRecipeAdded) {
        onRecipeAdded(); // call onRecipeAdded is onRecipeAdded is passed
      } // if
    } // try 
    catch (error) { // error handling
      console.error('Error adding recipe:', error);
    } // catch
  }; // const handleSubmit

  // below renders the add recipe form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Ingredients (comma separated):</label>
        <input 
          type="text" 
          value={ingredients} 
          onChange={(e) => setIngredients(e.target.value)} 
        />
      </div>
      <div>
        <label>Instructions:</label>
        <textarea 
          value={instructions} 
          onChange={(e) => setInstructions(e.target.value)} 
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  ); // return
}; // const AddRecipeForm

export default AddRecipeForm;