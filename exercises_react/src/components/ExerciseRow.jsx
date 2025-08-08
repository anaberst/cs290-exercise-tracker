import { FaPencil } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";

function ExerciseRow({ exercise, onEdit, onDelete }) {
    return(
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
                <a href ='/edit-exercise' onClick={e => {e.preventDefault(); onEdit(exercise)}}>
                    <FaPencil className="icon"/>
                </a>
            </td>
            <td>
                <a href ='/' onClick={e => {e.preventDefault(); onDelete(exercise._id)}}>
                    <BsFillTrash3Fill className="icon"/>
                </a>
            </td>
        </tr>
    );
}

export default ExerciseRow;