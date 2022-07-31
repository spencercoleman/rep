import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; 
import "@testing-library/jest-dom";
import ExercisesTable from '../ExercisesTable';

const seedExercises = [{
    _id: 'exerciseOne',
    name: 'Falcon Punch',
    force: 'Punch',
    category: 'Fist'
}, {
    _id: 'exerciseTwo',
    name: 'Jousting',
    force: 'Stab',
    category: 'Arm'
}];

const Wrapper = ({ children }) => {
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
    );
}

describe('Exercise list component', () => {
    it('renders a table', () => {
        render(<ExercisesTable exercises={seedExercises} />, { wrapper: Wrapper });
        expect(screen.getByRole('table')).toBeInTheDocument(); 
    });

    it('renders exercise name', () => {
        render(<ExercisesTable exercises={seedExercises} />, { wrapper: Wrapper });
        expect(screen.getByText(seedExercises[0].name)).toBeInTheDocument();
    });

    it('renders multiple exercises', () => {
        render(<ExercisesTable exercises={seedExercises} />, { wrapper: Wrapper });
        expect(screen.getByText(seedExercises[0].name)).toBeInTheDocument();
        expect(screen.getByText(seedExercises[1].name)).toBeInTheDocument();
    });

    it('renders exercise force column', () => {
        render(<ExercisesTable exercises={seedExercises} />, { wrapper: Wrapper });
        expect(screen.getByText(seedExercises[0].force)).toBeInTheDocument();
    });

    it('renders exercise category column', () => {
        render(<ExercisesTable exercises={seedExercises} />, { wrapper: Wrapper });
        expect(screen.getByText(seedExercises[1].category)).toBeInTheDocument();
    });

    it('handles empty exercises state', () => {
        render(<ExercisesTable exercises={[]} />, { wrapper: Wrapper });
        expect(screen.getByText('Could not find any exercises.')).toBeInTheDocument();
    });
});