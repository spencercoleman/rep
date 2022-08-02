import { useState, useEffect } from 'react';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components/macro';
import StyledCard from '../styles/StyledCard';
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

    .submit-workout-button {
        margin-left: auto;
        padding: var(--spacing-xs) var(--spacing-md);
    }

    .error {
        border: 1px solid var(--red);
        transition: 0.2s ease-in;
    }

    .error-message {
        color: var(--red);
    }
`;

const WorkoutForm = ({ setShowForm }) => {
    const { dispatch } = useWorkoutsContext();
    const { exerciseList } = useExercisesContext();
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [duration, setDuration] = useState(0);
    const [exercises, setExercises] = useState([
        {
            index: 0,
            exerciseId: '',
            weight: 0,
            sets: 0,
            reps: 0
        }
    ]);
    const [error, setError] = useState(null);
    const [errorFields, setErrorFields] = useState([]);

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
        const updatedExercises = exercises.map(elem => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {exerciseIds, weights, sets, reps} = parseExercises();
        const workout = {
            title,
            notes,
            duration,
            exercises: exerciseIds,
            weights,
            sets,
            reps
        }

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setErrorFields(json.errorFields);
        }

        if (response.ok) {
            setError(null);
            setShowForm(false);
            setErrorFields([]);
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }

    const deleteExercise = (exerciseIndex) => {
        const updatedExercises = exercises.filter(elem => (elem.index !== exerciseIndex));
        setExercises(updatedExercises);
    }

    useEffect(() => {
        // Prevent scrolling when active
        document.body.style.overflow = 'hidden';

        return (() => {
            document.body.style.overflow = 'unset';
        });
    }, [])

    return (
        <StyledFormContainer>
            <StyledCard className="card-container">
                <div className="form-header">
                    <h2>Add a new workout</h2>
                    <button className="close-button" onClick={() => setShowForm(false)}><IoCloseOutline /></button>
                </div>
                <StyledForm onSubmit={handleSubmit} role="form">
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
                        min={0}
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
                                {exercises.map((exercise, i) => (
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
                    {error && <p className="error-message">{error}</p>}
                    <button className="submit-workout-button">Finish</button>
                </StyledForm>
            </StyledCard>
        </StyledFormContainer>
    );
}

export default WorkoutForm;