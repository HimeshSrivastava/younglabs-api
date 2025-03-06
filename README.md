# Full Stack Greeting App

A simple full-stack application built with Vite (React) and Node.js (Express) that allows users to enter their name and receive a personalized greeting from the backend API.

## Features

- **Frontend:** Built with Vite (React) and JavaScript
  - Input field for entering a name
  - "Get Greeting" button to fetch and display the greeting message
  - Uses Axios for API requests

- **Backend:** Built with Node.js and Express
  - Single API endpoint: `GET /api/greet?name=YourName`
  - Returns a JSON response with a personalized greeting
  - Handles missing name input with an error message
  - Uses Nodemon for development

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Vite](https://vitejs.dev/) (for frontend development)

### Clone the Repository
```sh
git clone https://github.com/HimeshSrivastava/younglabs-api.git
cd cd younglabs-api
```
### Backend Setup
Navigate to the backend directory
```sh
cd backend
```
Install dependencies
```sh
npm install
```
Start the server
```sh
node server.js
```
The backend will be running at http://localhost:5000
### Frontend Setup
Navigate to the frontend directory
```sh
cd frontend
```
Install dependencies
```sh
npm install
```
Start the server
```sh
npm run dev
```
Open http://localhost:5173 in your browser.

### API Endpoint
GET /api/greet?name=YourName
Success Response
```sh
  {
  "message": "Hello, YourName! Welcome to Younglabs."
}
```
Error Response (if name is missing)
```sh
   {
  "error": "Name is required."
}
```

## Deployment on Render

The project has been deployed using **Render**.

- **Live Frontend URL:** ([https://your-frontend-render-url.com](https://younglabs-api-frontend.onrender.com))  
- **Live Backend API URL:** ([https://your-backend-render-url.com](https://younglabs-api-backend.onrender.com))  

Ensure the frontend correctly communicates with the deployed backend by updating the API URL in your React app.



