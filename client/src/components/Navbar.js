import { NavLink, useLocation } from "react-router-dom";
import { IoHome, IoHomeOutline, IoBody, IoBodyOutline, IoBarbell, IoBarbellOutline } from 'react-icons/io5';
import styled from "styled-components/macro";
import { useEffect } from "react";

const StyledNav = styled.nav`
    background-color: var(--black);
    color: var(--white);
    text-align: center;
    padding: var(--spacing-xs) var(--spacing-md);
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px -2px 6px, rgba(0, 0, 0, 0.23) 0px -2px 6px;
    font-size: var(--font-size-sm);

    @media (min-width: 768px) {
        padding: var(--spacing-xxl) var(--spacing-md);
        box-shadow: none;
        position: relative;
        width: auto;
        box-shadow: none;
    }

    ul {
        display: flex;
        justify-content: space-between;

        @media (min-width: 768px) {
            flex-direction: column;
            justify-content: flex-start;
            gap: var(--spacing-xl);
        }
    }

    a {
        display: flex;
        flex-direction: column;
    }

    .active {
        text-decoration: none;
    }

    .icon {
        font-size: var(--font-size-lg);
        margin: 0 auto;
        margin-bottom: var(--spacing-xs);

        @media (min-width: 768px) {
            margin-bottom: var(--spacing-xxs);
        }
    }

    .add-workout-button {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
`;

const Navbar = ({ setShowForm }) => {
    let location = useLocation();

    useEffect(() => {
        setShowForm(false);
    }, [location, setShowForm]);

    return (
        <StyledNav>
            <ul>
                <li>
                    <NavLink to="/" children={({ isActive }) => isActive ? <><IoHome className="icon" /> Home</> : <><IoHomeOutline className="icon" /> Home</>} />
                </li>
                <li>
                    <NavLink to="/workouts" children={({ isActive }) => isActive ? <><IoBody className="icon" /> Workouts</> : <><IoBodyOutline className="icon" /> Workouts</>} />
                </li>
                <li>
                    <NavLink to="/exercises" children={({ isActive }) => isActive ? <><IoBarbell className="icon" /> Exercises</> : <><IoBarbellOutline className="icon" /> Exercises</>} />
                </li>
            </ul>
        </StyledNav>
    );
}

export default Navbar;