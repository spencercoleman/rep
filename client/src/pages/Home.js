import { useState, useEffect } from "react";
import WorkoutDetails from '../components/WorkoutDetails';

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
            
            <h2>Recent Activity</h2>
            {/* TODO: Add Activity chart */}
            
            <h2>Your Workouts</h2>
            <ul className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </ul>
        </>
    );
}

export default Home;