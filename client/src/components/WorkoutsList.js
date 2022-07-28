import styled from "styled-components/macro";
import WorkoutDetails from "./WorkoutDetails";

const StyledWorkoutsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
`;

const WorkoutsList = ({ workouts }) => {
    return (
        <StyledWorkoutsList>
            {workouts && workouts.length > 0 ? workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
            )) : (
                <p>No workouts have been added.</p>
            )}
        </StyledWorkoutsList>
    );
}

export default WorkoutsList;