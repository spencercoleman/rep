import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Section from '../components/Section';
import WorkoutsList from "../components/WorkoutsList";

const Home = () => {
    const { workouts } = useWorkoutsContext();

    return (
        <>
            <h1>Dashboard</h1>

            <Section title="Recent Activity">
                {/* TODO: Add Activity chart */}
                <p>Placeholder</p>
            </Section>

            { workouts && (
            <Section title="Your Workouts" viewAllLink="/workouts">
                <WorkoutsList workouts={workouts.slice(0, 3)} />
            </Section>
            )}
        </>
    );
}

export default Home;