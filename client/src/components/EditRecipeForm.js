// ./client/src/components/EditRecipeForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
  const { id } = useParams(); // getting recipe id from url
  const [name, setName] = useState(''); // name
  const [ingredients, setIngredients] = useState(''); // ingredients
  const [instructions, setInstructions] = useState(''); // instructions
  const navigate = useNavigate();

  useEffect(() => { // useEffect to fet recipe by id when component mounts
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/recipes/${id}`); // GET request to fetch recipe using its id
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
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Ingredients (comma separated):</label>
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      </div>
      <div>
        <label>Instructions:</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  ); // return
}; // const EditRecipeForm

export default EditRecipeForm;