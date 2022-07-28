import { useState } from "react";
import { IoCloseOutline } from 'react-icons/io5';
import styled from "styled-components/macro";

const StyledInputsRow = styled.tr`
    input {
        max-width: 50px;
        text-align: center;

        @media (min-width: 768px) {
            max-width: 100px;
            text-align: left;
        }
    }

    .delete-icon {
        font-size: var(--font-size-lg);

        svg {
            cursor: pointer;
        }
    }
`;

const ExerciseInputs = ({ exerciseList, exercise, updateExercises, deleteExercise }) => {
    const [exerciseId, setExerciseId] = useState('');
    const [weight, setWeight] = useState(exercise.weight);
    const [sets, setSets] = useState(exercise.sets);
    const [reps, setReps] = useState(exercise.reps);

    const handleChange = () => {
        updateExercises({
            index: exercise.index,
            exerciseId,
            weight,
            sets,
            reps
        });
    }

    const handleDelete = () => {
        deleteExercise(exercise.index);
    }

    return (   
        <StyledInputsRow onBlur={handleChange}>
            <td>
                <select onChange={(e) => setExerciseId(e.target.value)}>
                    <option style={{display: 'none'}}></option>
                    {exerciseList.map(exercise => (
                        <option key={exercise._id} value={exercise._id}>{exercise.name}</option>
                    ))}
                </select>
            </td>
            <td>
                <input 
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
                    min={0}
                    placeholder={50}
                />
            </td>
            <td>
                <input 
                    type="number"
                    onChange={(e) => setSets(e.target.value)}
                    value={sets}
                    min={0}
                    placeholder={5}
                />
            </td>
            <td>
                <input 
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    min={0}
                    placeholder={10}
                />
            </td>
            {exercise.index !== 0 && (
                <td className="delete-icon">
                    <IoCloseOutline onClick={() => handleDelete()} />
                </td>
            )}
        </StyledInputsRow>
    );
}

export default ExerciseInputs;