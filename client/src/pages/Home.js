import { useState, useEffect } from "react";
import Section from '../components/Section';
import WorkoutsList from "../components/WorkoutsList";

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
                <p>Placeholder</p>
            </Section>
            {/* TODO: Add Activity chart */}

            { workouts && (
            <Section title="Your Workouts" viewAllLink="/workouts">
                <WorkoutsList workouts={workouts.slice(0, 5)} />
            </Section>
            )}

        </>
    );
}

export default Home;