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

    .exercise-name {
        background-color: var(--purple);
        color: var(--white);
        font-weight: 700;
        padding: var(--spacing-xxs) var(--spacing-xs);
        border-radius: var(--border-radius-subtle);
    }

    .exercise-table {
        border: none;
        border-spacing: var(--spacing-sm);
        border-radius: var(--border-radius-subtle);
        background-color: rgba(0, 0, 0, 0.04);
        width: 100%;
        padding-bottom: var(--spacing-xs);

        th {
            padding-bottom: var(--spacing-xs);
        }
    }
`;

const WorkoutDetails = ({ workout }) => {
    return (
        <StyledDetails>
            <StyledCard>
                <strong className="workout-title">{workout.title}</strong>
                
                {workout.notes.length > 0 && <p>{workout.notes}</p>}
                
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
                                        <Link to={`/exercises/${exercise._id}`} className="exercise-name">{exercise.name}</Link></td>
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