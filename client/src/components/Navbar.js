import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoBodyOutline, IoBarbellOutline } from 'react-icons/io5';
import styled from "styled-components/macro";

const StyledNav = styled.nav`
    background-color: var(--purple);
    color: var(--white);
    text-align: center;
    padding: var(--spacing-sm);
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px -2px 6px, rgba(0, 0, 0, 0.23) 0px -2px 6px;

    @media (min-width: 768px) {
        padding: var(--spacing-xxl) var(--spacing-md);
        box-shadow: none;
        position: relative;
        width: auto;
        box-shadow: none;
    }

    ul {
        display: flex;
        justify-content: space-around;

        @media (min-width: 768px) {
            flex-direction: column;
            justify-content: flex-start;
            gap: var(--spacing-xl);
        }
    }

    a {
        display: flex;
        flex-direction: column;
        font-size: var(--font-size-sm);
    }

    .active {
        text-decoration: underline;
    }

    .icon {
        font-size: var(--font-size-xl);
        margin: 0 auto;

        @media (min-width: 768px) {
            margin-bottom: var(--spacing-xs);
        }
    }
`;

const Navbar = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <NavLink to="/"><IoHomeOutline className="icon" />Home</NavLink>
                </li>
                <li>
                    <NavLink to="/workouts"><IoBodyOutline className="icon" />Workouts</NavLink>
                </li>
                <li>
                    <NavLink to="/exercises"><IoBarbellOutline className="icon" />Exercises</NavLink>
                </li>
            </ul>
        </StyledNav>
    );
}

export default Navbar;