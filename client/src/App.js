// ./client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';


// main component to hold the structure of the app
function App() {
  return (
    // router is used to wrap entire app to enable routing
    <Router>
      <div>
        <h1>Recipe Recommendation App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Add new recipe route */}
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} /> {/* Edit recipe route */}
        </Routes>
      </div>
    </Router>
  ); // return
} // App

export default App;