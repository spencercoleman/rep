import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; 
import "@testing-library/jest-dom";
import ExerciseDetails from '../ExerciseDetails';

const seedExercise = {
    _id: 'exerciseOne',
    name: 'Falcon Punch',
    force: 'Punch',
    category: 'Fist',
    instructions: 'Wind arm back and punch while yelling "Falcon Punch"'
};

const Wrapper = ({ children }) => {
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
    );
}

describe('Exercise Details component', () => {
    it('renders instructions paragraph', () => {
        render(<ExerciseDetails exercise={seedExercise} />, { wrapper: Wrapper });
        expect(screen.getByText(seedExercise.instructions)).toBeInTheDocument();
    });

    it('renders details table', () => {
        render(<ExerciseDetails exercise={seedExercise} />, { wrapper: Wrapper });
        expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('renders the exercise force', () => {
        render(<ExerciseDetails exercise={seedExercise} />, { wrapper: Wrapper });
        expect(screen.getByText(seedExercise.force)).toBeInTheDocument();
    })

    it('renders the exercise category', () => {
        render(<ExerciseDetails exercise={seedExercise} />, { wrapper: Wrapper });
        expect(screen.getByText(seedExercise.category)).toBeInTheDocument();
    })
});