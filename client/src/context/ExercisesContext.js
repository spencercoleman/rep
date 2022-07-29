import { createContext, useState, useEffect } from 'react';

export const ExercisesContext = createContext();

export const ExercisesProvider = ({ children }) => {
    const [exerciseList, setExerciseList] = useState(null);

    const fetchExercises = async () => {
        const response = await fetch('/api/exercises');
        const data = await response.json();

        if (response.ok) {
            setExerciseList(data);
        }
    }

    useEffect(() => {
        fetchExercises();
    }, []);

    return (
        <ExercisesContext.Provider value={{ exerciseList }}>
            {children}
        </ExercisesContext.Provider>
    );
}