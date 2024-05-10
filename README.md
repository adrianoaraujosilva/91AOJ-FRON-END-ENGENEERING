# Tasks Management

This project is an API built using **Node.js With Express lib for Backend**

This screen interfaces were built using **Vue.js for Frontend**

## Table of Contents
- [PreRequirements](#prerequirements)
- [Installation - Backend](#installation-backend)
- [Installation - Frontend](#installation-frontend)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## PreRequirements
1. Install the Node.js LTS version 
2. Install the Visual Studio Code software from Microsoft

## Installation - Backend

1. Clone the repository:

```bash
git clone https://github.com/adrianoaraujosilva/91AOJ-FRONT-END-ENGENEERING
```

2. Access the node folder and install dependencies with NPM

```bash
cd .\node\
npm install
```

3. Save some libs in package.json file

```bash
npm install express --save
npm install nodemon --save
npm install sqlite3 --save
npm install sqlite --save
```

## Installation - Frontend

1. Access the vue folder and install dependencies with NPM

```bash
cd .\vue\
npm install
```

2. Rename the .env.example file to .env

3. IMPORTANT: To resolve an error of incompatible libs, please run the following command: 

```bash
npm install vite@4.4.0 --force
```

## Usage

1. Start the backend server application navigating to node folder and run the command:

The server will be listening on port 8888

```bash
cd .\node\
npm run dev
```

2. Start the frontend application navigating to vue folder and running the same command

The application will be listening 8080

```bash
cd .\vue\
npm run dev
```

## API Endpoints
The API provides the following endpoints:

**GET Login**
```markdown	
POST /login - Send credentials information to login in the application
```

**ADD new Task**
```markdown
POST /tasks - create a new task and save it in database
``` 

**GET all Tasks**
```markdown
GET /tasks - load all tasks saved in database
``` 

**GET a Task by ID**
```markdown
GET /tasks/:id - load a specific task based on the id given
```

**Update a Task**
```markdown
PATCH /tasks/:id - update the information of a task based on the id given
```

**Delete a Task by ID**
```markdown
DELETE /tasks/:id - delete a task based on the id given
```

**BODY**
```json
{
    "id": 1,
    "description": "new task created!",
    "due_date": "01/05/2024"
}
```

