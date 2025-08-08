import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExerciseTable from '../components/ExerciseTable';

function HomePage( {setExerciseToEdit} ) {
    
    const [currentExercise, setCurrentExercise] = useState([]);
    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setCurrentExercise(data);
    }

    useEffect( () => {
        loadExercises();
    }, []);

    const onDelete = async _id => {
    const response = await fetch(
        `/exercises/${_id}`, 
        { method: 'DELETE' }
    );
    if (response.status === 204) {
        const getResponse = await fetch('/exercises');
        const exercises = await getResponse.json();
        setCurrentExercise(exercises.filter( e => e._id !== _id));
    } 
    else {
        console.error(`Failed to delete exercise. Try again!`)
    }
    }

    const onEdit = (exercise) => {
        setExerciseToEdit(exercise);
        navigate('/edit-exercise');
    }

    return (
        <>
            <ExerciseTable exercises={currentExercise} onEdit={onEdit} onDelete={onDelete} />
        </>
    );
}

export default HomePage;