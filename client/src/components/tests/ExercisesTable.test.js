import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'; 
import "@testing-library/jest-dom";
import ExercisesTable from '../ExercisesTable';

describe('Exercise list component', () => {
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

    it('renders a table', () => {
        render(
            <BrowserRouter>
                <ExercisesTable exercises={seedExercises} />
            </BrowserRouter>
        );
       expect(screen.getByRole('table')).toBeInTheDocument(); 
    });

    it('renders exercise name', () => {
        render(
            <BrowserRouter>
                <ExercisesTable exercises={seedExercises} />
            </BrowserRouter>
        );
        expect(screen.getByText(seedExercises[0].name)).toBeInTheDocument();
    });

    it('renders multiple exercises', () => {
        render(
            <BrowserRouter>
                <ExercisesTable exercises={seedExercises} />
            </BrowserRouter>
        );
        expect(screen.getByText(seedExercises[0].name)).toBeInTheDocument();
        expect(screen.getByText(seedExercises[1].name)).toBeInTheDocument();
    });

    
    it('renders exercise force column', () => {
        render(
            <BrowserRouter>
                <ExercisesTable exercises={seedExercises} />
            </BrowserRouter>
        );
        expect(screen.getByText(seedExercises[0].force)).toBeInTheDocument();
    });

    it('renders exercise category column', () => {
        render(
            <BrowserRouter>
                <ExercisesTable exercises={seedExercises} />
            </BrowserRouter>
        );
        expect(screen.getByText(seedExercises[1].category)).toBeInTheDocument();
    });

    it('handles empty exercises state', () => {
        render(
            <BrowserRouter>
                <ExercisesTable />
            </BrowserRouter>
        );

        expect(screen.getByText('Could not find any exercises.')).toBeInTheDocument();
    });
});