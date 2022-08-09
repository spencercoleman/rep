import { useState } from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline, IoCreateOutline } from 'react-icons/io5';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import styled from "styled-components/macro";
import StyledCard from "../styles/StyledCard";
import EditWorkoutForm from './EditWorkoutForm';
import { useExercisesContext } from "../hooks/useExercisesContext";

const StyledDetails = styled.li`
    div {
        overflow-x: auto;
    }

    p {
        margin: var(--spacing-sm) 0;
    }

    .workout-header {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        gap: var(--spacing-sm);
    }

    .workout-title {
        font-size: var(--font-size-md);
        margin-right: auto;
    }

    .workout-date {
        font-size: var(--font-size-sm);
    }

    .workout-duration {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        font-weight: 700;
        
        svg {
            font-size: 1.1rem;
        }
    }

    .exercise-table {
        border: none;
        border-spacing: var(--spacing-sm);
        border-radius: var(--border-radius-subtle);
        background-color: var(--lightgrey);
        width: 100%;
        padding-bottom: var(--spacing-xs);
        table-layout: auto;

        th {
            padding-bottom: var(--spacing-xs);
            text-align: center;

            &:first-child {
                text-align: left;
            }
        }

        td {
            white-space: nowrap;
            text-align: center;

            &:first-of-type {
                text-align: left;
            }

            a:hover {
                text-decoration: none;
            }
        }

        @media (min-width: 945px) {
            table-layout: fixed;
        }
    }

    .edit-button {
        padding: 0;
        background-color: transparent;
        color: var(--darkgrey);
        font-size: 1.5rem;
    }
`;

const StyledName = styled.span`
    background-color: ${props => props.force === 'Push' ? '#cce5ff' : '#d4edda'};
    color: ${props => props.force === 'Push' ? '#004085' : '#155724'};
    font-weight: 700;
    padding: var(--spacing-xxs) var(--spacing-xs);
    border-radius: var(--border-radius-subtle);
`;

const WorkoutDetails = ({ workout }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { exerciseList } = useExercisesContext();

    //  Get exercise details from the exercise list context
    const parseExercise = (exerciseId) => {
        const exerciseData = exerciseList.find(exercise => exercise._id === exerciseId)

        return {
            name: exerciseData.name,
            force: exerciseData.force,
        }
    }

    // Convert workout duration (minutes) to HH:MM format
    const parseDurationToHoursAndMinutes = (totalMinutes) => {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
    
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    }
    
    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    }

    return (
        <StyledDetails>
            <StyledCard>
                {isEditing ? (
                    <>
                        <EditWorkoutForm workout={workout} setIsEditing={setIsEditing} />

                    </>
                ) : (
                    <>
                        <div className="workout-header">
                            <strong className="workout-title">{workout.title}</strong>
                            <button className="edit-button" onClick={() => setIsEditing(!isEditing)}><IoCreateOutline aria-label="Edit Workout" /></button>
                        </div>
                        
                        <div className="workout-date">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</div>
                        <div className="workout-duration"><IoTimeOutline />{parseDurationToHoursAndMinutes(workout.duration)}</div>

                        {workout.notes && workout.notes.length > 0 && <p>{workout.notes}</p>}
                        
                        {exerciseList && exerciseList.length > 0 && (
                            <div>
                                <table className="exercise-table">
                                    <thead>
                                        <tr>
                                            <th>Exercise</th>
                                            <th>Weight</th>
                                            <th>Sets</th>
                                            <th>Reps</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {workout.exercises.map((exerciseId, index) => {
                                            const exerciseData = parseExercise(exerciseId);
    
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <Link to={`/exercises/${exerciseId}`}>
                                                            <StyledName force={exerciseData.force}>{exerciseData.name}</StyledName>
                                                        </Link>
                                                    </td>
                                                    <td>{workout.weights[index]}</td> 
                                                    <td>{workout.sets[index]}</td>
                                                    <td>{workout.reps[index]}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>    
                            </div>
                        )}
                    </>
                )}
                
            </StyledCard>
        </StyledDetails>
    )
}

export default WorkoutDetails;