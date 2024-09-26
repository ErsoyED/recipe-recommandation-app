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
    2. Navigate to where you want to clone the repository.

        1. ```git clone https://github.com/ErsoyED/recipe-recommendation-app.git`
        2. ```cd recipe-recommendation-app`

2. **Install Dependencies for Both Client and Server:**

    #### Server-side:
    Navigate to the `server` folder and install the dependencies:

        Open a new terminal within the project folder:
            
            1. ```cd server`
            2. ```npm install`
        
        This will now be your server terminal.

    #### Client-side:
    Navigate to the `client` folder and install the dependencies:

        Open a new terminal within the project folder:

            1. ```cd client`
            2. ```npm install`

        This will now be your client terminal.

3. **Set up MongdoDB**

    This project uses MongoDB atlas. There is a free tier.

    1. In the server folder, open the .env file.
    2. Update MONGO_URI, you should see that it is set to mongodb+srv://<username>:<password>@c<cluster>.rrhqn.mongodb.net/?
        1. Change <username> to your MongoDB username.
        2. Change <password> to your MongoDB password.
        3. Change <cluster> to the name of the cluster you want to use.

4. **Start the Application**

    #### Server-side:
        
    Open the server terminal:

        ```npm start`

        The console should output that the server is running on port 5001 and that MongoDB is connected.

    - If running into port issues, change the port from 5001 to something else in: 
        - client/src/components/RecipeDetail.js
        - client/src/components/RecipeList.js
        - server/server.js

    - If running into MongoDB connection issues, in server/.env:
        - Check MongoDB username.
        - Check MongoDB password.
        - CHeck MongoDB cluster name.

    #### Client-side:
        
        Open the client terminal:

            ```npm start`

    The application should now be running.

## Using the Application/Application Features

### Usage
- Homepage: (`http://localhost:3000`): Displays a list of recipes fetched from MongoDB.
- Specific Recipe Details: (`http://localhost:3000/recipe/:id`): Shows a specific recipe by is within the MongoDB database.
- Add Recipe: (`http://localhost:3000/add-recipe`): Allows the user to add a recipe to the database.
- Edit Recipe: (`http://localhost:3000/edit-recipe/<id>`): Allows the user to edit a specifc recipe in the database by id.

- **To view all recipes within the database:**
    1. With the application running, enter `http://localhost:3000` in your browsers search bar.
    2. All recipes in the database should now be shown.

- **To view a specific recipe within the database:**
    1. Retrieve the id of the recipe you would like to view from MongoDB.
    2. With the application running, enter `http://localhost:3000/recipe/<id>` in your browsers search bar. Replace <id> in the URL with the id retrieved from the database.
    3. The specific recipe requested should be shown.

- **To add a recipe to the database:**
    1. With the application running, enter `http://localhost:3000/add-recipe` in your browsers search bar.
    2. Add a recipe name, add ingredients (separated by commas), and add the cooking instructions.
    3. Click `Add Recipe`, your recipe should now be added.

- **To edit a recipe to the database:**
    1. Retrieve the id of the recipe you would like to view from MongoDB.
    2. With the application running, enter `http://localhost:3000/edit-recipe/<id>` in your browsers search bar. Replace <id> in the URL with the id retrieved from the database.
    3. Edit recipe name, edit ingredients (everythin should still be seperated by commas), or edit the cooking instructions.
    4. Click `Update Recipe`, your recipe should now be updated with your edits.

### Features
- Retrieve and view recipes in the MongoDB database.
- Add new recipes to the database.
- Edit existing recipes in the database.

### Future Enhancements
- Implement navigation buttons to avoid typing everything out in the browser.
- Link recipes directly to the recipe list to avoid retrieving the ID and make viewing/editing easier.
- Implement search feature 
- Implement favorite recipes feature.

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