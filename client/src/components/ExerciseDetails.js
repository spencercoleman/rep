import styled from "styled-components/macro";
import StyledCard from "../styles/StyledCard";

const StyledDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);

    @media (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
    }

    .section-inner {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }

    .section-table {
        border-spacing: 0 var(--spacing-sm);
    }
`;

const StyledSpan = styled.span`
    background-color: ${props => props.force === 'Push' ? 'var(--blue)' : 'var(--green)'};
    color: var(--white);
    font-weight: 700;
    padding: var(--spacing-xxs) var(--spacing-xs);
    border-radius: var(--border-radius-subtle);
`;

const ExerciseDetails = ({ exercise }) => {
    return (
        <StyledCard>
            <StyledDetails>
                <div className="section-inner">
                    <h3>Classification</h3>
                    <table className="section-table">
                        <tbody>
                            <tr>
                                <td><strong>Target Muscles</strong></td>
                                <td>{exercise.category}</td>
                            </tr>
                            <tr>
                                <td><strong>Force</strong></td>
                                <td><StyledSpan force={exercise.force}>{exercise.force}</StyledSpan></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section-inner">
                    <h3>Instructions</h3>
                    <p>{exercise.instructions}</p>
                </div>
            </StyledDetails>
        </StyledCard>
    );
}

export default ExerciseDetails;