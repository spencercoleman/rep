import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import StyledCard from "../styles/StyledCard";

const StyledDetails = styled.li`
    div {
        overflow-x: auto;
    }

    p {
        margin-bottom: var(--spacing-sm);
    }

    .workout-title {
        font-size: var(--font-size-md);
    }

    .exercise-table {
        border: none;
        border-spacing: var(--spacing-sm);
        border-radius: var(--border-radius-subtle);
        background-color: var(--lightgrey);
        width: 100%;
        padding-bottom: var(--spacing-xs);
        font-size: var(--font-size-sm);
        table-layout: auto;

        th {
            padding-bottom: var(--spacing-xs);
            font-weight: 900;
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
    return (
        <StyledDetails>
            <StyledCard>
                <strong className="workout-title">{workout.title}</strong>
                
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