import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateExercisePage() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const createExercise = async () => {

        const newExercise = {
            name, 
            reps, 
            weight, 
            unit, 
            date
        }
        
        const response = await fetch(
            '/exercises', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newExercise)
            }
        );

        if(response.status === 201) {
            alert("Successfully logged the exercise!");
        } else {
            alert("Failed to log the exercise. Rerouting to home page.");
        }
        navigate('/');
    };
        
    return(
        <>

        <form>
            <fieldset>
            
                <label htmlFor="name" className="firstLabel">Exercise name:</label>
                <input 
                    type="text"
                    placeholder="Enter name here"
                    value={name}
                    onChange={e => setName(e.target.value)} />

                <label htmlFor="reps">Repetitions:</label>
                <input 
                    type="number"
                    placeholder="Enter reps here"
                    value={reps}
                    onChange={e => setReps(e.target.valueAsNumber)} />

                <label htmlFor="weight">Weight:</label>
                <input 
                    type="number"
                    placeholder="Enter weight here"
                    value={weight}
                    onChange={e => setWeight(e.target.valueAsNumber)} />

                <label htmlFor="unit">Unit:</label>
                <select 
                    value={unit} 
                    onChange={e => setUnit(e.target.value)}>
                    <option value="lbs">lbs</option>
                    <option value="kgs">kgs</option>
                </select>

                <label htmlFor="date">Date (MM-DD-YY):</label>
                <input 
                    type="string"
                    placeholder="MM-DD-YY"
                    value={date}
                    onChange={e => setDate(e.target.value)} />

                <button
                    type="button"
                    onClick={createExercise}
                >Log</button>

            </fieldset>
        </form>
        </>
    );
}

export default CreateExercisePage;