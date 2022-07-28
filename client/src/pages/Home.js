import { useState, useEffect } from "react";
import Section from '../components/Section';
import WorkoutsList from "../components/WorkoutsList";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    
    // Will didplay user workouts
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const data = await response.json();

            if (response.ok) {
                setWorkouts(data);
            }
        }
        fetchWorkouts();
    }, []);
    
    return (
        <>
            <h1>Dashboard</h1>

            <Section title="Recent Activity">
                {/* TODO: Add Activity chart */}
                <p>Placeholder</p>
            </Section>

            { workouts && (
            <Section title="Your Workouts" viewAllLink="/workouts">
                <WorkoutsList workouts={workouts.slice(0, 5)} />
            </Section>
            )}
        </>
    );
}

export default Home;