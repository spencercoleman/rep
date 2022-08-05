import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

const StyledExerciseTable = styled.table`
    border: none;
    border-spacing: 0;
    width: 100%;
    padding-bottom: var(--spacing-xs);
    table-layout: auto;

    @media (min-width: 445px) {
        table-layout: fixed;
    }

    th {
        padding: var(--spacing-xs);
        font-weight: 900;
        text-align: left;
    }

    td {
        white-space: nowrap;
        padding: var(--spacing-xs);
    }

    .exercise-item {
        cursor: pointer;

        &:hover {
            background-color: var(--lightgrey);
        }
    }
`;



const ExercisesTable = ({ exercises }) => {
    const navigate = useNavigate();

    return (
        <>
            {exercises && exercises.length > 0 ? (
                <StyledExerciseTable>
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Force</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map(exercise => (
                            <tr key={exercise._id} className="exercise-item" onClick={() => navigate(`/exercises/${exercise._id}`)}>
                                <td>
                                    {exercise.name}
                                </td>
                                <td>
                                    {exercise.force}
                                </td>
                                <td>
                                    {exercise.category}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </StyledExerciseTable>
            ) : (
                <p>Could not find any exercises.</p>
            )}
        </>
    );
}

export default ExercisesTable;