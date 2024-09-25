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

module.exports = router;