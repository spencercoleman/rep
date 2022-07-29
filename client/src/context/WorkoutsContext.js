import { createContext, useState, useEffect } from 'react';

export const WorkoutsContext = createContext();

export const WorkoutsProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState(null);

    const fetchWorkouts = async () => {
        const response = await fetch('/api/workouts');
        const data = await response.json();

        if (response.ok) {
            setWorkouts(data);
        }
    }

    useEffect(() => {
        fetchWorkouts();
    }, []);

    return (
        <WorkoutsContext.Provider value={{workouts, fetchWorkouts}}>
            {children}
        </WorkoutsContext.Provider>
    );
}