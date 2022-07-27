import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'; 
import "@testing-library/jest-dom";
import ExerciseDetails from '../ExerciseDetails';

describe('Exercise Details component', () => {
    const seedExercise = {
        _id: 'exerciseOne',
        name: 'Falcon Punch',
        force: 'Punch',
        category: 'Fist',
        instructions: 'Wind arm back and punch while yelling "Falcon Punch"'
    };

    it('renders instructions paragraph', () => {
        render(
            <BrowserRouter>
                <ExerciseDetails exercise={seedExercise} />
            </BrowserRouter>
        );
        expect(screen.getByText(seedExercise.instructions)).toBeInTheDocument();
    });

    it('renders details table', () => {
        render(
            <BrowserRouter>
                <ExerciseDetails exercise={seedExercise} />
            </BrowserRouter>
        );
        expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('renders the exercise force', () => {
        render(
            <BrowserRouter>
                <ExerciseDetails exercise={seedExercise} />
            </BrowserRouter>
        );
        expect(screen.getByText(seedExercise.force)).toBeInTheDocument();
    })

    it('renders the exercise category', () => {
        render(
            <BrowserRouter>
                <ExerciseDetails exercise={seedExercise} />
            </BrowserRouter>
        );
        expect(screen.getByText(seedExercise.category)).toBeInTheDocument();
    })
});