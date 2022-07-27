import styled from "styled-components/macro";

const StyledCard = styled.div`
    box-shadow: 0 1px 2px rgb(12 23 32 / 10%), 0 2px 4px rgb(12 23 32 / 5%);
    padding: var(--spacing-md);
    border-radius: var(--border-radius-subtle);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    overflow-x: auto;
    background-color: var(--white);
`;

export default StyledCard;