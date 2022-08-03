import { IoAdd } from 'react-icons/io5';
import styled from "styled-components/macro";
import WorkoutDetails from "./WorkoutDetails";
import StyledCard from "../styles/StyledCard";
import StyledWorkoutButton from '../styles/StyledWorkoutButton';

const StyledWorkoutsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);

    .add-workout {
        text-align: center;
        padding: var(--spacing-xxxl);

        p {
           margin-bottom: var(--spacing-xs); 
        }

        button {
            max-width: fit-content;
            margin: auto;
        }
    }
`;

const WorkoutsList = ({ workouts, setShowForm }) => {
    return (
        <StyledWorkoutsList>
            {workouts && workouts.length > 0 ? workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
            )) : (
                <StyledCard className="add-workout">
                    <p>No workouts have been added.</p>
                    <StyledWorkoutButton onClick={() => setShowForm(true)}><IoAdd /> Add a Workout</StyledWorkoutButton>
                </StyledCard>
            )}
        </StyledWorkoutsList>
    );
}

export default WorkoutsList;