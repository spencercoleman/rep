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

    .demo-login {
        border: 2px solid var(--black);
        border-radius: var(--border-radius-subtle);
        font-weight: 700;
        width: fit-content;
        margin: auto;
        padding: var(--spacing-xs) var(--spacing-md);
        cursor: pointer;
        transition: all 0.3s ease;
        color: var(--black);
        text-align: center;

        &:hover {
            background-color: var(--black);
            color: var(--white);
        }
    }
`;

export default StyledContainer;