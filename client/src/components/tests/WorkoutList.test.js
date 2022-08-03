import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; 
import "@testing-library/jest-dom";
import { ExercisesProvider } from "../../context/ExercisesContext";
import WorkoutsList from '../WorkoutsList';

const seedWorkouts = [{
    _id: 'workoutOne',
    title: 'Punch Training',
    createdAt: '2022-07-28T07:13:10.146+00:00',
    duration: 75,
    exercises: ['ex0', 'ex1', 'ex2'],
    notes: 'Added 10-km run at the end',
    weights: [100, 123, 135],
    sets: [10, 10, 10],
    reps: [10, 10, 10]
}, {
    _id: 'workoutTwo',
    title: 'Running up that hill',
    createdAt: '2022-08-02T03:28:18.741+00:00',
    duration: 60,
    exercises: ['ex3'],
    weights: [1],
    sets: [2],
    reps: [3],
}];

const Wrapper = ({ children }) => {
    return (
        <ExercisesProvider>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </ExercisesProvider>

    );
}

describe('Workout list component', () => {
   
    it('renders a list', () => {
        render(<WorkoutsList workouts={seedWorkouts} />, { wrapper: Wrapper });
        expect(screen.getByRole('list')).toBeInTheDocument(); 
    });

    it('renders multiple workouts', () => {
        render(<WorkoutsList workouts={seedWorkouts} />, { wrapper: Wrapper });

        const list = screen.getByRole('list');
        const { getAllByRole } = within(list)
        const items = getAllByRole("listitem")
        expect(items.length).toBe(2);
    });

    it('handles empty workouts state', () => {
        render(<WorkoutsList workouts={[]} />, { wrapper: Wrapper });
        
        expect(screen.getByText('No workouts have been added.')).toBeInTheDocument();
    });
});