import { useState, useEffect, useCallback } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { IoCloseOutline, IoAddOutline, IoTrashOutline } from 'react-icons/io5';
import styled from 'styled-components/macro';
import ExerciseInputs from './ExerciseInputs';
import { useExercisesContext } from '../hooks/useExercisesContext';

const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);

    .exercises-table {
        overflow-x: auto;
        background-color: var(--lightgrey);
        border-radius: var(--border-radius-subtle);
        font-size: var(--font-size-sm);

        @media (min-width: 768px) {
            font-size: var(--font-size-base);
        }

        table {
            table-layout: auto;
            border-spacing: var(--spacing-xs);
            padding-bottom: var(--spacing-md);
        }

        thead { 
            text-align: left;
        }
    }

    button {
        width: fit-content;
    }

    .add-exercise {
        display: flex;
        align-items: center;
        font-weight: 700;
        cursor: pointer;
        width: fit-content;

        svg {
            font-size: 1.2rem;
        }
    }

    .buttons-container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);

        @media (min-width: 768px) {
            justify-content: flex-end;
        }
    }

    .buttons-container-inner {
        display: flex;
        gap: var(--spacing-xs);
    }

    .delete-workout-button, .submit-workout-button {
        padding: var(--spacing-xs) var(--spacing-md);
    }

    .delete-workout-button {
        background-color: var(--red);
        margin-right: auto;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        
        &:hover {
            background-color: var(--darkred);
        }
    }

    .cancel-button {
        font-weight: 700;
        background-color: transparent;
        color: var(--black);
        border: 2px solid var(--black);
        border-radius: var(--border-radius-subtle);
        padding: 0.2rem var(--spacing-sm);

        &:hover {
            background-color: var(--black);
            color: var(--white);
        }
    }

    .cancel-icon {
        background: none;
        padding: 0;
        font-size: 1.7rem;
        color: var(--black);
        margin-left: auto;
    }

    .confirm-modal {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--spacing-md);
        background-color: #fff;
        text-align: center;

        em {
            margin-bottom: var(--spacing-md);
        }
    }

    .error {
        border: 1px solid var(--red);
        transition: 0.2s ease-in;
    }

    .error-message {
        color: var(--red);
    }
`;

const EditWorkoutForm = ({ workout, setIsEditing }) => {
    const { user } = useAuthContext();
    const { dispatch } = useWorkoutsContext();
    const { exerciseList } = useExercisesContext();
    const [title, setTitle] = useState(workout.title);
    const [notes, setNotes] = useState(workout.notes);
    const [duration, setDuration] = useState(workout.duration);
    const [exercises, setExercises] = useState(null);
    const [error, setError] = useState(null);
    const [errorFields, setErrorFields] = useState([]);
    const [isConfirming, setIsConfirming] = useState(false);
    const MAX_EXERCISES = 8;

    const addExercise = () => {
        setExercises([...exercises, {
            index: exercises.length,
            exerciseId: '',
            weight: 0,
            sets: 0,
            reps: 0
        }]);
    }

    const deleteExercise = (exerciseIndex) => {
        const updatedExercises = exercises.filter(elem => (elem.index !== exerciseIndex));
        setExercises(updatedExercises);
    }

    const updateExercises = (exercise) => {
        const updatedExercises = exercises.map((elem, i) => {
            if (elem.index === exercise.index) {
                return exercise;
            }
            return elem;
        });
        setExercises(updatedExercises);
    }

    const parseExercises = () => {
        // Parse exercises to extract weights, sets, and reps
        const exerciseIds = [];
        const weights = [];
        const sets = [];
        const reps = [];

        exercises.forEach(exercise => {
            exerciseIds.push(exercise.exerciseId);
            weights.push(exercise.weight);
            sets.push(exercise.sets);
            reps.push(exercise.reps);
        })

        return {exerciseIds, weights, sets, reps};
    }

    // Grab exercise data, weights, sets, and reps to populate inputs
    const getExerciseData = useCallback(() => {
        const exerciseData = [];

        workout.exercises.forEach((exerciseId, index) => {
            const exerciseObj = {
                exerciseId: exerciseId,
                index: index,
                weight: workout.weights[index],
                sets: workout.sets[index],
                reps: workout.reps[index]
            }
            exerciseData.push(exerciseObj);
        });
        return exerciseData;
    }, [workout.exercises, workout.weights, workout.sets, workout.reps]);

    const handleConfirm = (e) => {
        e.preventDefault();
        setIsConfirming(!isConfirming);
    }
    
    const handleCancel = (e) => {
        e.preventDefault();
        setIsEditing(false);
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in.');
            return;
        }

        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setError(null);
            setIsEditing(false);
            setIsConfirming(false);
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in.');
            return;
        }

        const {exerciseIds, weights, sets, reps} = parseExercises();
        const updatedWorkout = {
            title,
            notes,
            duration,
            exercises: exerciseIds,
            weights,
            sets,
            reps
        }

        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedWorkout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setErrorFields(json.errorFields);
        }

        if (response.ok) {
            setError(null);
            setErrorFields([]);
            setIsEditing(false);
            dispatch({ type: 'EDIT_WORKOUT', payload: json })
        }
    }

    useEffect(() => {
        const exerciseData = getExerciseData();
        setExercises(exerciseData);
    }, [getExerciseData])

    return (
        <>
            <StyledForm onSubmit={handleSubmit} role="form">
                <button className="cancel-icon" onClick={handleCancel}><IoCloseOutline aria-label="Cancel Edit" /></button>
                <input 
                    type="text"
                    className={errorFields.includes('title') ? 'error' : ''}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Add a title to your workout"
                />
                <input 
                    type="text"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                    placeholder="Add notes about your workout (optional)"
                />
                <label htmlFor="duration"><strong>Duration (minutes)</strong></label>
                <input 
                    id="duration"
                    className={errorFields.includes('duration') ? 'error' : ''}
                    type="number"
                    onChange={(e) => setDuration(e.target.value)}
                    value={duration}
                    min={1}
                    placeholder={60}
                />
                
                <div className="exercises-table">
                    <table className={errorFields.includes('exercises') ? 'error' : ''}>
                        <thead>
                            <tr>
                                <th>Exercise</th>
                                <th>Weight</th>
                                <th>Sets</th>
                                <th>Reps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exercises && exercises.map((exercise, i) => (
                                <ExerciseInputs 
                                    key={i} 
                                    exerciseList={exerciseList}
                                    exercise={exercise} 
                                    updateExercises={updateExercises} 
                                    deleteExercise={deleteExercise}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {exercises.length < MAX_EXERCISES && <span className="add-exercise" onClick={() => addExercise()}><IoAddOutline /> Add an Exercise</span>}
                
                {error && <p className="error-message">{error}</p>}
                
                <div className="buttons-container">
                    <button className="delete-workout-button" onClick={handleConfirm}><IoTrashOutline /> Delete Workout</button>
                    <div className="buttons-container-inner">
                        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                        <button className="submit-workout-button">Save Changes</button>
                    </div>
                </div>
                
                {isConfirming && (
                    <div className="confirm-modal">
                        <strong>Are you sure you want to delete this workout?</strong>
                        <em>This action cannot be undone.</em>
                        <div className="buttons-container">
                            <button className="cancel-button" onClick={handleConfirm}>Cancel</button>
                            <button className="delete-workout-button" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                )}
            </StyledForm>
        </>
    );
}

export default EditWorkoutForm;