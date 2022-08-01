import { useState, useEffect } from 'react';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { IoAddOutline } from 'react-icons/io5';
import styled from 'styled-components/macro';
import ExerciseInputs from './ExerciseInputs';
import { useExercisesContext } from '../hooks/useExercisesContext';

const StyledFormContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    padding-bottom: var(--spacing-xxxl);

    #duration {
        max-width: 100px;
    }

    .card-container {
        margin: var(--spacing-md);
        width: 100%;
        z-index: 11;

        @media (min-width: 768px) {
            width: auto;
        }
    }

    .form-header {
        display: flex;
        align-items: center;
        margin-bottom: var(--spacing-xs);
        
        h2 {
            margin-right: auto;
        }
    }

    .close-button {
        padding: 0;
        background: none;
        color: var(--darkgrey);
        display: flex;
        align-items: center;

        svg {
            font-size: var(--font-size-lg);
        }
    }
`;

const StyledForm = styled.form`
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

        svg {
            font-size: 1.2rem;
        }
    }

    .buttons-container {
        display: flex;
        justify-content: flex-end;
        gap: var(--spacing-xs);
    }

    .cancel-button {
        font-weight: 700;
        background-color: transparent;
        color: var(--black);
        border: 2px solid var(--black);
        border-radius: var(--border-radius-subtle);
        padding: 0.2rem var(--spacing-sm);
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .submit-workout-button {
        padding: var(--spacing-xs) var(--spacing-md);
    }
`;

const EditWorkoutForm = ({ workout, setIsEditing }) => {
    const { fetchWorkouts } = useWorkoutsContext();
    const { exerciseList } = useExercisesContext();
    const [title, setTitle] = useState(workout.title);
    const [notes, setNotes] = useState(workout.notes);
    const [duration, setDuration] = useState(workout.duration);
    const [exercises, setExercises] = useState(null);
    const [error, setError] = useState(null);

    const addExercise = () => {
        setExercises([...exercises, {
            index: exercises.length,
            exerciseId: '',
            weight: 0,
            sets: 0,
            reps: 0
        }]);
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
    const getExerciseData = () => {
        const exerciseData = [];

        workout.exercises.forEach((exercise, index) => {
            const exerciseObj = {
                exerciseId: exercise._id,
                index: index,
                weight: workout.weights[index],
                sets: workout.sets[index],
                reps: workout.reps[index]
            }
            exerciseData.push(exerciseObj);
        });
        return exerciseData;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
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
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }

        if (response.ok) {
            setError(null);
            setIsEditing(false);
            fetchWorkouts();
        }
    }

    const deleteExercise = (exerciseIndex) => {
        const updatedExercises = exercises.filter(elem => (elem.index !== exerciseIndex));
        setExercises(updatedExercises);
    }

    useEffect(() => {
        setExercises(getExerciseData());
    }, [])

    return (
        <>
            <StyledForm onSubmit={handleSubmit} role="form">
                <input 
                    type="text"
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
                    type="number"
                    onChange={(e) => setDuration(e.target.value)}
                    value={duration}
                    min={0}
                    placeholder={60}
                />
                <div className="exercises-table">
                    <table>
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
                <span className="add-exercise" onClick={() => addExercise()}><IoAddOutline /> Add an Exercise</span>
                {error && <p>{error}</p>}
                <div className="buttons-container">
                    <span className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</span>
                    <button className="submit-workout-button">Finish</button>
                </div>
            </StyledForm>
        </>
    );
}

export default EditWorkoutForm;