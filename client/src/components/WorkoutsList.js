import { useState } from "react";
import styled from "styled-components/macro";
import WorkoutDetails from "./WorkoutDetails";

const StyledWorkoutsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
`;

const WorkoutsList = ({ workouts }) => {
    const [unit, setUnit] = useState('kg');

    return (
        <StyledWorkoutsList>
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} unit={unit} />
            ))}
        </StyledWorkoutsList>
    );
}

export default WorkoutsList;