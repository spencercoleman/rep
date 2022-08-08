import styled from "styled-components/macro";

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spacing-xl) var(--spacing-md);

    h1 {
        border: none;
        margin-bottom: var(--spacing-lg);
        font-size: var(--font-size-xxl);
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
    }

    svg {
        font-size: var(--font-size-xxxl);
        transform: rotate(140deg);
    }

    .cta {
        margin: var(--spacing-lg) auto;
    }
`;

export default StyledContainer;