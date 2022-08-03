import styled from "styled-components/macro";

const StyledWorkoutButton = styled.button`
    display: flex;
    align-items: center;
    gap: var(--spacing-xxs);
    margin-bottom: var(--spacing-lg);

    svg {
        font-size: 1.2rem;
    }
`;

export default StyledWorkoutButton;