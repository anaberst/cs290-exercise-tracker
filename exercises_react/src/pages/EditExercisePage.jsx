import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditExercisePage({ exerciseToEdit }) {
    
    const navigate = useNavigate();

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const editExercise = async () => {

        const editedExercise = {
            name, 
            reps, 
            weight, 
            unit, 
            date
        }

        const response = await fetch(
            `/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(editedExercise)
            }
        );

        if(response.status === 200) {
            alert("Successfully edited the exercise!");
        } else {
            alert("Failed to edit the exercise. Rerouting to home page.");
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
                    value={name}
                    onChange={e => setName(e.target.value)} />

                <label htmlFor="reps">Repetitions:</label>
                <input 
                    type="number"
                    value={reps}
                    onChange={e => setReps(e.target.valueAsNumber)} />

                <label htmlFor="weight">Weight:</label>
                <input 
                    type="number"
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
                    value={date}
                    onChange={e => setDate(e.target.value)} />
                
                <button
                    type="button"
                    onClick={editExercise}
                >Log</button>
                
            </fieldset>
        </form>
        </>
    );
}

export default EditExercisePage;