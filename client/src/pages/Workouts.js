import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { IoAdd } from 'react-icons/io5';
import Section from "../components/Section";
import WorkoutsList from "../components/WorkoutsList";
import StyledWorkoutButton from '../styles/StyledWorkoutButton';

const Workouts = ({ setShowForm }) => {
    const { workouts } = useWorkoutsContext();
    
    return (
        <>
            <h1>Your Workouts</h1>
            <Section title="All Workouts">
                <StyledWorkoutButton onClick={() => setShowForm(true)}><IoAdd /> Add a Workout</StyledWorkoutButton>
                <WorkoutsList workouts={workouts} setShowForm={setShowForm} />
            </Section>
        </>
    );
}

export default Workouts;