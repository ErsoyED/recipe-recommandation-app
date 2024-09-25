// ./server/models/Recipe.js

const mongoose = require('mongoose');

// recipe schema
const recipeSchema = new mongoose.Schema({
  name: { // recipe name
    type: String,
    required: true,
  }, // name
  ingredients: { // recipe ingredients
    type: [String],
    required: true,
  }, // ingredients
  instructions: { // recipe instructions
    type: String,
    required: true,
  }, // instructions
}, // recipe schema
{ timestamps: true }); // adding time stamps

module.exports = mongoose.model('Recipe', recipeSchema);