import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';

function App() {

   const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="app">
      <Router>

        <header>
          <h1>Sunny: Exercise Tracker</h1>
          <p>The app that helps you stay on track</p>
          <Navigation />
        </header>

      <Routes>
        <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />}></Route>
        <Route path='/edit-exercise' element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
        <Route path='/create-exercise' element={<CreateExercisePage />}></Route>
      </Routes>

        <footer>
          <p>&copy; 2025 Anastasiya Berst</p>
        </footer>
        
      </Router>
    </div>
  );
}

export default App;
