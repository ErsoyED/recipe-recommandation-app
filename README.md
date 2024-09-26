# Recipe Recommendation App

A full-stack web application that suggests recipes based on ingredients, stores recipes in MongoDB, and allows users to view recipe details.

## Current Features

- **View a List of Recipes:** Browse through all available recipes.
- **Backend Powered by Express and MongoDB:** Efficiently handle data storage and retrieval.
- **Frontend Built with React:** Responsive and interactive user interface.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/atlas) (MongoDB Atlas)

### Installation

1. **Clone the Repository:**

    1. Open a terminal
    2. Navigate to where you want to clone the repository and enter the following commands in the terminal:

        1. `git clone https://github.com/ErsoyED/recipe-recommendation-app.git`
        2. `cd recipe-recommendation-app`

2. **Install Dependencies for Both Client and Server:**

    #### Server-side:
    Navigate to the `server` folder and install the dependencies:

        Open a new terminal within the project folder and enter the following commands in the terminal:
            
            1. cd server
            2. npm install
        
    **This will now be your server terminal.**

    #### Client-side:
    Navigate to the `client` folder and install the dependencies:

        Open a new terminal within the project folder and enter the following commands in the terminal:

            1. cd client
            2. npm install

    **This will now be your client terminal.**

3. **Set up MongdoDB**

    This project uses MongoDB atlas. There is a free tier.

    1. In the server folder, open the .env file.
    2. Update MONGO_URI, you should see that it is set to `mongodb+srv://username:password@cluster.rrhqn.mongodb.net/?`
        1. Change `username` to your MongoDB username.
        2. Change `password` to your MongoDB password.
        3. Change `cluster` to the name of the cluster you want to use.

4. **Start the Application**

    #### Server-side:
        
    Open the server terminal and enter the following command in the terminal:

        npm start

    **The console should output that the server is running on port 5001 and that MongoDB is connected.**

    - If running into port issues, change the port from 5001 to something else in: 
        - client/src/components/RecipeDetail.js
        - client/src/components/RecipeList.js
        - server/server.js

    - If running into MongoDB connection issues, in server/.env:
        - Check MongoDB username.
        - Check MongoDB password.
        - CHeck MongoDB cluster name.

    #### Client-side:
        
        Open the client terminal and enter the following command in the terminal:

            npm start

    **The application should now be running.**

## Using the Application/Application Features

### Usage
- Homepage: (`http://localhost:3000`): Displays a list of recipes fetched from MongoDB.
- Specific Recipe Details: (`http://localhost:3000/recipe/:id`): Shows a specific recipe by is within the MongoDB database.
- Add Recipe: (`http://localhost:3000/add-recipe`): Allows the user to add a recipe to the database.
- Edit Recipe: (`http://localhost:3000/edit-recipe/<id>`): Allows the user to edit a specifc recipe in the database by id.

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
    3. Add a recipe name, add ingredients (separated by commas), and add the cooking instructions.
    4. Click the `Add Recipe` button. 
    **Your recipe should now be added to the database.**

- **To edit an existing recipe in the database:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    2. Click on the recipe you wish to edit from the homescreen.
    3. Click the `Edit Recipe` button on the recipe details page.
    4. Update the name, ingredients (still seperated by commas), and/or instructions of the recipe.
    5. Click the `Update Recipe` button.
    **Your updates should now be reflected on the recipe details page.**

- **To delete a recipe from the database:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    2. Click on the recipe you wish to delete.
    3. Click the `Delete Recipe` button. 
    **Your recipe should now be deleted from the database.**    

### Features
- Retrieve and view recipes in the MongoDB database.
- Add new recipes to the database.
- Edit existing recipes in the database.
- Delete recipes from the database.

### Future Enhancements
- UI improvements.
- Search feature.
- Favorite recipes feature.

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