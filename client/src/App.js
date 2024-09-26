// ./client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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

        {/* navigation Buttons for homescreen */}
        <nav>
          <Link to="/">
            <button>Home</button> {/* home button */}
          </Link>
          <Link to="/add-recipe">
            <button>Add Recipe</button> {/* add recipe button */}
          </Link>
        </nav>

        {/* routes for each page */}
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* homescreen route */}
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* recipe detail route */}
          <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* add recipe route */}
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} /> {/* edit recipe route */}
        </Routes>
      </div>
    </Router>
  ); // return
} // App

export default App;