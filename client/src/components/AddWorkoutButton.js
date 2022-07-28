import { IoAddOutline } from 'react-icons/io5';
import styled from "styled-components/macro";

const StyledAddButton = styled.button`
    display: flex;
    position: fixed;
    right: var(--spacing-xs);
    top: var(--spacing-xs);
    z-index: 11;
    font-size: var(--font-size-lg);
    padding: var(--spacing-xs);
    box-shadow: 0 1px 2px rgb(12 23 32 / 10%), 0 2px 4px rgb(12 23 32 / 5%);

    @media (min-width: 768px) {
        bottom: var(--spacing-md);
        right: var(--spacing-md);
        font-size: var(--font-size-xl);
        top: auto;
    }
`;

const AddWorkoutButton = ({ showForm, setShowForm }) => {
    return (
        <StyledAddButton onClick={() => setShowForm(!showForm)}>
            <IoAddOutline className="icon"/>
        </StyledAddButton>
    );
}

export default AddWorkoutButton;