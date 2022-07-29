import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Section from "../components/Section";
import WorkoutsList from "../components/WorkoutsList";

const Workouts = () => {
    const { workouts } = useWorkoutsContext();
    
    return (
        <>
            <h1>Your Workouts</h1>
            <Section title="Most Recent">
                <WorkoutsList workouts={workouts} />
            </Section>
        </>
    );
}

export default Workouts;