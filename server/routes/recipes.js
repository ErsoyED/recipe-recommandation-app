// ./server/routes/recipes.js

const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET all recipes
router.get('/recipes', async (req, res) => {
    try { // fetching all the recipes from MongoDB
      const recipes = await Recipe.find();
      res.json(recipes); // send recipes as JSON
    } // try
    catch (err) { // error handling
      res.status(500).json({ message: err.message });
    } //catch
  }); //router

// GET a single recipe by ID
router.get('/recipes/:id', async (req, res) => {
  try { // fetching a specific recipe by ID from MongoDB
    const recipe = await Recipe.findById(req.params.id);
    if (recipe == null) {
      return res.status(404).json({ message: 'Recipe not found' }); // 404 error if no recipes matches the ID
    } // if
    res.json(recipe);
  } // try
  catch (err) { // error handing
    res.status(500).json({ message: err.message });
  } // catch
}); // router

// POST route to add a new recipe
router.post('/recipes', async (req, res) => {
    const { image, name, ingredients, instructions } = req.body;
  
    // making sure there are no empty fields
    if (!name || !ingredients || !instructions) {
      return res.status(400).json({ message: "Recipe name, ingredients, and instructions are required." });
    } // if
  
    // new recipe object
    const newRecipe = new Recipe({
      image,
      name,
      ingredients,
      instructions,
    }); // const newRecipe
  
    try {
      const savedRecipe = await newRecipe.save(); // add the new recipe to the database
      res.status(201).json(savedRecipe);
    } // try
    catch (error) {
      res.status(500).json({ message: error.message });
    } // catch
  }); // router.post

// PUT route to edit a recipe by ID
router.put('/recipes/:id', async (req, res) => {
    const { image, name, ingredients, instructions } = req.body;
  
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, { // finding recipe and updating with new data
        image,
        name,
        ingredients,
        instructions,
      }, // const updatedRecipe
      { new: true }); // returns updated document
  
      if (!updatedRecipe) { // if the recipe doesn't exist
        return res.status(404).json({ message: 'Recipe not found' });
      } // if
  
      res.json(updatedRecipe); // updated recipe as JSON
    } // try 
    catch (error) { // error handling
      res.status(500).json({ message: error.message });
    } // catch
  }); // router.post

// DELETE route to delete recipe by ID
router.delete('/recipes/:id', async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      res.json({ message: 'Recipe deleted successfully' });
    } // try
    catch (error) {
      console.error("Error deleting recipe:", error);
      res.status(500).json({ message: error.message });
    } // catch
  }); // router.delete

module.exports = router;