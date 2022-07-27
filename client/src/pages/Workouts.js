import { useState, useEffect } from "react";
import Section from "../components/Section";
import WorkoutsList from "../components/WorkoutsList";

const Workouts = () => {
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
            <h1>Your Workouts</h1>
            <Section title="Most Recent">
                <WorkoutsList workouts={workouts} />
            </Section>
        </>
    );
}

export default Workouts;