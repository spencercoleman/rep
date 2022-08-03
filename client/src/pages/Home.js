import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Section from '../components/Section';
import ActivityChart from "../components/ActivityChart";
import WorkoutsList from "../components/WorkoutsList";

const Home = () => {
    const { workouts } = useWorkoutsContext();

    return (
        <>
            <h1>Dashboard</h1>
            <Section title="Recent Activity">
                {/* TODO: Add Activity chart */}
                <ActivityChart workouts={workouts} />
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