import { Link } from "react-router-dom";
import { IoTimeOutline } from 'react-icons/io5';
import styled from "styled-components/macro";
import StyledCard from "../styles/StyledCard";

const StyledDetails = styled.li`
    div {
        overflow-x: auto;
    }

    p {
        margin-bottom: var(--spacing-sm);
    }

    .workout-header {
        display: flex;
        flex-wrap: wrap;
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
`;

const StyledName = styled.span`
    background-color: ${props => props.force === 'Push' ? 'var(--blue)' : 'var(--green)'};
    color: var(--white);
    font-weight: 700;
    padding: var(--spacing-xxs) var(--spacing-xs);
    border-radius: var(--border-radius-subtle);
`;

const WorkoutDetails = ({ workout }) => {
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
                <div className="workout-header">
                    <strong className="workout-title">{workout.title}</strong>
                    <span className="workout-date">{new Date(workout.createdAt).toLocaleString()}</span>
                </div>

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
                            {workout.exercises.map((exercise, i) => (
                                <tr key={exercise._id}>
                                    <td>
                                        <Link to={`/exercises/${exercise._id}`}>
                                            <StyledName force={exercise.force}>{exercise.name}</StyledName>
                                        </Link>
                                    </td>
                                    <td>{workout.weights[i]}</td> 
                                    <td>{workout.sets[i]}</td>
                                    <td>{workout.reps[i]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>    
                </div>
            </StyledCard>
        </StyledDetails>
    )
}

export default WorkoutDetails;