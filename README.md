# :sunny: CS290 Sunny Exercise Tracker

Final project for `CS290: Web Development` at Oregon State University. It has been approved for public sharing.

This full-stack MERN application allows users to track their exercise routines by logging workouts with details like exercise name, repetitions, weight, unit, and date. The application demonstrates modern web development practices including RESTful API design, database integration, and responsive user interfaces.

It consists of these key components:

- **Backend API** (`exercises_controller.mjs`): Express.js server handling CRUD operations with comprehensive validation
- **Database Model** (`exercises_model.mjs`): MongoDB integration using Mongoose for data persistence and schema management
- **Frontend Interface**: React-based user interface for exercise management with real-time updates
- **Modern Styling**: CSS3 with custom properties, gradients, and responsive design principles

The project showcases full-stack development skills including API endpoint design, database operations, form validation, error handling, and modern UI/UX practices with a bright, sunny theme.

## :hourglass_flowing_sand: Features

- **Create Exercise**: Add new exercises with name, reps, weight, unit (lbs/kgs), and date
- **View Exercises**: Display all logged exercises in a clean, organized table format  
- **Update Exercise**: Modify existing exercise entries with inline editing
- **Delete Exercise**: Remove exercises with confirmation prompts
- **Input Validation**: Comprehensive validation for all fields including date format and positive numbers
- **Responsive Design**: Mobile-friendly interface that works across all device sizes

## :computer: Technology Stack

- **Frontend**: React, HTML5, CSS3, JavaScript ES6+
- **Backend**: Node.js, Express.js with async/await error handling
- **Database**: MongoDB with Mongoose ODM
- **Build Tool**: Vite for fast development and optimized production builds
- **Development**: Nodemon for automatic server restarts

## :rocket: Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cs290-exercise-tracker.git
cd cs290-exercise-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file with your MongoDB connection string
MONGODB_CONNECT_STRING=your_mongodb_connection_string_here
PORT=3000
```

4. Start the development servers:
```bash
# Backend server (runs on port 3000)
npm start

# Frontend development server (runs on port 5173)
npm run dev
```

5. Open your browser to `http://localhost:5173`

## :wrench: API Endpoints

- `GET /exercises` - Retrieve all exercises
- `POST /exercises` - Create a new exercise
- `GET /exercises/:id` - Get a specific exercise by ID
- `PUT /exercises/:id` - Update an exercise by ID
- `DELETE /exercises/:id` - Delete an exercise by ID

All endpoints include comprehensive error handling with appropriate HTTP status codes and validation messages.

## :art: Design Features

- **Sunny Theme**: Warm yellow and orange gradient color scheme
- **Modern UI**: Clean cards, smooth transitions, and hover effects
- **Accessibility**: Focus indicators, semantic HTML, and keyboard navigation
- **Responsive**: Mobile-first design with breakpoints for all screen sizes
- **User Experience**: Loading states, success/error messages, and intuitive interactions

## :open_file_folder: File Structure
```
cs290-exercise-tracker/
├── README.md                    # You are here
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite build configuration
├── index.html                   # Main HTML entry point
├── exercises_controller.mjs     # Express API routes and validation
├── exercises_model.mjs         # Mongoose models and database operations
├── src/
│   ├── main.jsx                # React application entry point
│   ├── App.jsx                 # Main React component
│   ├── components/             # Reusable React components
│   └── styles/                 # CSS stylesheets
└── .gitignore                  # Git ignore configuration
```

## :bulb: Concepts Demonstrated

- **RESTful API Design**: Proper HTTP methods, status codes, and resource modeling
- **Database Integration**: MongoDB schema design, validation, and CRUD operations
- **React Development**: Component-based architecture, state management, and lifecycle methods
- **Modern JavaScript**: ES6+ features, async/await, destructuring, and modules
- **Form Validation**: Both client-side and server-side validation with user feedback
- **Error Handling**: Comprehensive error catching and user-friendly error messages
- **Responsive Design**: CSS Grid, Flexbox, and media queries for cross-device compatibility
