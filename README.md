# Recipe Recommendation App

A full-stack web application that suggests recipes based on ingredients, stores recipes in MongoDB, and allows users to view recipe details.

## Current Features

- **View a List of Recipes:** Browse through all saved recipes.
- **Manually Add Your Own Recipe:** Add an image, a name, ingredients, and instructions for your recipe.
- **Edit Saved Recipes:** Edit image, name, ingredients, or instructions for a saved recipe.
- **Spoonacular Recipe Search:** Search through various recipe websites and blogs using the Spoonacular API to find recipes.
- **Save Spoonacular Recipes:** See something you wanna make after searching with Spoonacular? Easily save it your recipes!
- **Backend Powered by Express and MongoDB:** Efficiently handle data storage and retrieval.
- **Frontend Built with React:** Responsive and interactive user interface.

## Getting Started

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/en/) installed on your machine. 
- Ensure you have a [MongoDB Atlas](https://www.mongodb.com/atlas) account with a cluster setup. You will need your username and password.
- Ensure you have a [Spoonacular API account](https://spoonacular.com/food-api). You will need your Spoonacular API key.

### Installation

1. **Clone the Repository:**

    1. Open a terminal
    2. Navigate to where you want to clone the repository and enter the following commands in the terminal:

        git clone https://github.com/ErsoyED/recipe-recommendation-app.git
        cd recipe-recommendation-app

2. **Install Dependencies for Both Client and Server:**

    #### Server-side:
    Navigate to the `server` folder and install the dependencies:

        Open a new terminal within the project folder and enter the following commands in the terminal:
            
            cd server
            npm install
        
    **This will now be your server terminal.**

    #### Client-side:
    Navigate to the `client` folder and install the dependencies:

        Open a new terminal within the project folder and enter the following commands in the terminal:

            cd client
            npm install

    **This will now be your client terminal.**

3. **Set up MongdoDB and Spoonacular search**

    This project uses MongoDB atlas and Spoonaculat API. There is a free tier for both.

    **MongoDB**
    1. In the `server` folder, open the `.env` file.
    2. Update `MONGO_URI`, you should see that it is set to `mongodb+srv://username:password@cluster.rrhqn.mongodb.net/?`.
        1. Change `username` to your MongoDB username.
        2. Change `password` to your MongoDB password.
        3. Change `cluster` to the name of the cluster you want to use.

    **Spoonacular API**
    1. In the `server` folder, open the `.env` file.
        1. Update `REACT_APP_SPOONACULAR_API_KEY`, you should see that it is set to `<spoonacular api key>`.
        2. Change `<spoonacular api key>` to your Spoonacular API key.
    2. In the `client` folder, open the `.env` file.
        1. Update `REACT_APP_SPOONACULAR_API_KEY`, you should see that it is set to `<spoonacular api key>`.
        2. Change `<spoonacular api key>` to your Spoonacular API key.
    

4. **Start the Application**

    #### Server-side:
        
    Open the server terminal and enter the following command in the terminal:

        npm start

    **The console should output that the server is running on port 5001 and that MongoDB is connected.**

    **Troubleshooting steps if facing issues while starting server:**

    - If running into port issues, change the port from 5001 to something else in: 
        - client/src/components/RecipeDetail.js
        - client/src/components/RecipeList.js
        - server/server.js

    - If running into MongoDB connection issues, in ./server/.env:
        - Check MongoDB username.
        - Check MongoDB password.
        - CHeck MongoDB cluster name.

    #### Client-side:
        
        Open the client terminal and enter the following command in the terminal:

            npm start

    **The application should now be running.**

### Usage

- **To view all recipes within the database:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    **The recipe list with all recipes in the database should now be shown.**

- **To view a specific recipe within the database:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    2. Click on the recipe you wish to see from the homescreen.
    **The recipe details page should now be shown with the recipe you wish to see.**

- **To add a recipe to the database:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    2. Click the `Add Recipe` button from the homescreen.
    3. Add a recipe image (optional), name, add ingredients (separated by commas), and add the cooking instructions.
    4. Click the `Add Recipe` button. 
    **Your recipe should now be added to the database.**

- **To edit an existing recipe in the database:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    2. Click on the recipe you wish to edit from the homescreen.
    3. Click the `Edit Recipe` button on the recipe details page.
    4. Update the image (this can also be removed), name, ingredients (still seperated by commas), and/or instructions of the recipe.
    5. Click the `Update Recipe` button.
    **Your updates should now be reflected on the recipe details page.**

- **To delete a recipe from the database:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    2. Click on the recipe you wish to delete.
    3. Click the `Delete Recipe` button. 
    **Your recipe should now be deleted from the database.**

- **To search for a recipe using Spoonacular:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    2. Click the `Search for a Recipe with Spoonacular` button.
    3. Type in something you would like a recipe for, e.g., cookies, pizza, pasta, etc.
    4. Click the `Search` button.
    **The Spoonacular search results should now be displayed with images (if available).**

- **To save a recipe from Spoonacular search results:**
    1. With the application running and Spoonacular search results displayed, find the recipe you wish to save. 
    2. Click the `Save to My Recipes` button below the recipe you chose.
    **The recipe should know be saved to your database from Spoonacular with an image (if available).**
    **This will be treated the same as a manual recipe entry, and will just be another point in the database.**

    **Troubleshooting steps if facing issues while using the app:**

    - If running into Spoonacular issues:
        - Check API key in ./server/.env
        - Check API key in ./client/.env
        - If using the free tier of Spoonacular API, ensure you have requests remaining for the day.

### Future Enhancements
- UI improvements.
- Recommend recipes with user provided ingredients.

### Technologies Used
- #### Frontend:
    - Axios
    - React
    - React Router DOM
- #### Backend:
    - CORS
    - Express
    - Node.js
    - MongoDB
    - Mongoose
    - Spoonacular API