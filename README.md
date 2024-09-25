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
- Specific Recipe Details: (`http://localhost:3000/recipe/:id`): Shows a specific recipe by is within the MongoDB cluster.
- **IF** the database is empty, sample data can be added to the MongoDB Cluster manually:

    1. Navigate to `clusters` on MongoDB Atlas.
    2. Select the cluster used in this Application.
    3. Navigate to `collections`.
    4. Find the recipes database.
    5. Select `Insert Document`.
    6. Select `{}` from the `VIEW` options.
    7. Replace the text that's already there with a sample in this exact format:
        
        {
        "name": "<name-of-food>",
        "ingredients": ["<ingredent1>", "<ingredient2>", "<ingredientx>", ...], (Can add ingredients as needed)
        "instructions": "<cooking-instructions>",
        "createdAt": "<YYYY>-<MM>-<DD>T<HH>:<MM>:<SS>Z",
        "updatedAt": "<YYYY>-<MM>-<DD>T<HH>:<MM>:<SS>Z"
        }

    8. Select `Insert`.

    The sample data should be inserted and should be viewable from the Application.

### Features
- Right now, the only feature is to retrieve recipes that are already within the MongoDB cluster.

### Future Enhancements
- Implement feature to add new recipes directly within the app.
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