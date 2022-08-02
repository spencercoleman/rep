import { useState } from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline, IoCreateOutline } from 'react-icons/io5';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import styled from "styled-components/macro";
import StyledCard from "../styles/StyledCard";
import EditWorkoutForm from './EditWorkoutForm';

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
        }

        td {
            white-space: nowrap;

            a:hover {
                text-decoration: none;
            }
        }

        @media (min-width: 445px) {
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
    background-color: ${props => props.force === 'Push' ? 'var(--blue)' : 'var(--green)'};
    color: var(--white);
    font-weight: 700;
    padding: var(--spacing-xxs) var(--spacing-xs);
    border-radius: var(--border-radius-subtle);
`;

const WorkoutDetails = ({ workout }) => {
    const [isEditing, setIsEditing] = useState(false);

    function parseDurationToHoursAndMinutes(totalMinutes) {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
    
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
    }
    
    function padTo2Digits(num) {
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
                                    {workout.exercises.map((exercise, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Link to={`/exercises/${exercise._id}`}>
                                                    <StyledName force={exercise.force}>{exercise.name}</StyledName>
                                                </Link>
                                            </td>
                                            <td>{workout.weights[index]}</td> 
                                            <td>{workout.sets[index]}</td>
                                            <td>{workout.reps[index]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>    
                        </div>
                    </>
                )}
                
            </StyledCard>
        </StyledDetails>
    )
}

export default WorkoutDetails;