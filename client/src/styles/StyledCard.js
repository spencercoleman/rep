import styled from "styled-components/macro";

const StyledCard = styled.div`
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 6px, rgba(0, 0, 0, 0.12) 0px 3px 6px;
    padding: var(--spacing-md);
    border-radius: var(--border-radius-subtle);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    overflow-x: auto;
`;

export default StyledCard;