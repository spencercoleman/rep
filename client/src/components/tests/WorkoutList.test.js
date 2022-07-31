import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; 
import "@testing-library/jest-dom";
import WorkoutsList from '../WorkoutsList';

const seedWorkouts = [{
    _id: 'workoutOne',
    title: 'Punch Training',
    exercises: [{
        _id: 'ex0',
        name:  'Pushup',
    }, {
        _id: 'ex1',
        name: 'Situp'
    }, {
        _id: 'ex2',
        name: 'Air Squat'
    }],
    notes: 'Added 10-km run at the end',
    weights: [100, 123, 135],
    sets: [10, 10, 10],
    reps: [10, 10, 10]
}, {
    _id: 'workoutTwo',
    title: 'Running up that hill',
    exercises: [{
        _id: 'ex3', 
        name: 'Running'
    }],
    weights: [1],
    sets: [2],
    reps: [3],
}];

const Wrapper = ({ children }) => {
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
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