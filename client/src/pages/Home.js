import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Section from '../components/Section';
import ActivityChart from "../components/ActivityChart";
import WorkoutsList from "../components/WorkoutsList";
import Loader from "../components/Loader";

const Home = ({ setShowForm }) => {
    const { workouts } = useWorkoutsContext();

    return (
        <> 
            { workouts ? (
                <main>
                    <h1>Dashboard</h1>
                    <Section title="Recent Activity">
                        <ActivityChart workouts={workouts} />
                    </Section>

                    <Section title="Your Workouts" viewAllLink="/workouts">
                        <WorkoutsList workouts={workouts.slice(0, 3)} setShowForm={setShowForm} />
                    </Section>
                </main>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default Home;