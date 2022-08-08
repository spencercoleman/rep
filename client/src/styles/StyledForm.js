import styled from "styled-components/macro";

const StyledForm = styled.form`
    background-color: var(--white);
    box-shadow: 0 1px 2px rgb(12 23 32 / 10%), 0 2px 4px rgb(12 23 32 / 5%);
    padding: var(--spacing-lg) var(--spacing-md);
    border-radius: var(--border-radius-subtle);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    width: 100%;
    max-width: 400px;

    h2 {
        text-align: center;
        margin-bottom: var(--spacing-md);
    }

    input {
        margin-bottom: var(--spacing-md);
    }

    button {
        width: fit-content;
        margin: var(--spacing-md) auto;
        padding: var(--spacing-sm) var(--spacing-lg);
    }

    .error {
        color: var(--red);
    }
`;

export default StyledForm;