# :muscle: CS290 Exercise Tracker

Final project for `CS290: Web Development` at Oregon State University. It has been approved for public sharing.

This full-stack MERN app allows users to track their gym workouts by logging exercises with name, reps, weight, unit, and date.

<img alt="Sunny: Exercise Tracker, Log Exercise Page" src="./images/LogExercise.png" width="300">   <img alt="Sunny: Exercise Tracker, Landing Page" src="./images/LandingPage.png" width="302">

## :pancakes: Tech Stack

**Backend:**
- Node.js with Express.js framework
- MongoDB with Mongoose ODM
- RESTful API architecture with full CRUD operations

**Frontend:**
- React 18 with Vite build tool
- Component-based architecture with React Router
- Modern CSS styling and responsive design

## :bricks: Project Structure

The app follows a clear separation of concerns with distinct backend and frontend modules:

**Backend (`exercises_rest/`):**
- `exercises_model.mjs`: Mongoose schema and database operations
- `exercises_controller.mjs`: Express routes and request handling
- `a9-test-requests.http`: Comprehensive API testing suite

**Frontend (`exercises_react/`):**
- `src/App.jsx`: Main application component with routing
- `src/pages/`: Page components (Home, Create, Edit)
- `src/components/`: Reusable UI components (Table, Navigation, Row)

## :gear: Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Visual Studio Code (recommended)

### Backend Setup

1. **Configure MongoDB:**
   - Create a MongoDB Atlas cluster
   - Replace the connection string in `exercises_rest/.env` with your credentials:
   ```
   MONGODB_CONNECT_STRING='mongodb+srv://<userName>:<password>@<clusterName>.<clusterId>.mongodb.net/?retryWrites=true&w=majority&appName=<clusterName>'
   ```

2. **Install and run backend:**
   ```bash
   cd exercises_rest
   npm install
   npm start
   ```
   Server will start listening on `http://localhost:3000`

3. **Test the API:**
   - Open `a9-test-requests.http` in VS Code
   - Run individual HTTP requests by clicking on them
   - **Important:** After running Request 1 (POST Deadlift), copy the returned `_id` value and replace `@DEADLIFT_ID` at the top of the file

### Frontend Setup

1. **Install and run frontend:**
   ```bash
   cd exercises_react
   npm install
   npm run dev
   ```
   Application will be available at `http://localhost:5173`

## :sparkles: Features

- **Full CRUD Operations:** Complete create, read, update, delete functionality
- **Input Validation:** Client and server-side validation for data integrity
- **Responsive Design:** Mobile-friendly interface with modern styling
- **Real-time Updates:** Dynamic state management with immediate UI updates
- **Error Handling:** Comprehensive error messages and user feedback
- **RESTful API:** Standard HTTP methods and status codes

## :open_file_folder: File Structure
```
cs290-exercise-tracker/
├── README.md                          # You are here
├── exercises_rest/                    # Backend
│   ├── .env                           # Environment variables
│   ├── package.json                   # Dependencies
│   ├── package-lock.json              # Dependency lock file
│   ├── exercises_model.mjs            # MongoDB schema and operations
│   ├── exercises_controller.mjs       # Express routes and controllers
│   └── a9-test-requests.http          # API testing suite
└── exercises_react/                   # Frontend
    ├── index.html                     # Entry HTML file
    ├── package.json                   # Dependencies
    ├── package-lock.json              # Dependency lock file
    ├── vite.config.js                 # Vite configuration
    ├── public/                        # Static assets
    │   └── vite.svg                   # Vite logo
    └── src/                           # React source code
        ├── App.jsx                    # Main app component
        ├── App.css                    # App-specific styles
        ├── main.jsx                   # React entry point
        ├── index.css                  # Global styles
        ├── assets/                    # Static assets
        │   └── react.svg              # React logo
        ├── components/                # Reusable components
        │   ├── ExerciseRow.jsx
        │   ├── ExerciseTable.jsx
        │   └── Navigation.jsx
        └── pages/                     # Page components
            ├── CreateExercisePage.jsx
            ├── EditExercisePage.jsx
            └── HomePage.jsx
```
