import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; 
import { WorkoutsProvider } from "../../context/WorkoutsContext";
import { ExercisesProvider } from "../../context/ExercisesContext";
import "@testing-library/jest-dom";
import WorkoutForm from '../WorkoutForm';
import userEvent from "@testing-library/user-event";

const Wrapper = ({ children }) => {
    return (
        <WorkoutsProvider>
            <ExercisesProvider>
                <MemoryRouter>
                    {children}
                </MemoryRouter>
            </ExercisesProvider>
        </WorkoutsProvider>
    );
}

describe('Workout form component', () => {
    it('renders a form', () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('renders CTA to add a new workout', () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        expect(screen.getByText('Add a new workout')).toBeInTheDocument();
    });
    
    it('Renders an input for the workout title', () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        expect(screen.getByPlaceholderText('Add a title to your workout')).toBeInTheDocument();
    });

    it('Renders an input for the workout notes', () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        expect(screen.getByPlaceholderText('Add notes about your workout (optional)')).toBeInTheDocument();
    });

    it('Renders an input workout duration', () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        expect(screen.getByLabelText('Duration (minutes)')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('60')).toBeInTheDocument();
    });

    it('Renders an add exercise button', () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        expect(screen.getByText('Add an Exercise')).toBeInTheDocument();
    });

    it('Renders a submit button', () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        expect(screen.getByText('Finish')).toBeInTheDocument();
    });
});

describe('Worokut title input', () => {
    it("has correct value after user input", () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        const input = screen.getByPlaceholderText('Add a title to your workout');

        userEvent.type(input, "Ring Fit");
    
        expect(input).toHaveValue("Ring Fit");
    });
});

describe('Worokut notes input', () => {
    it("has correct value after user input", () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        const input = screen.getByPlaceholderText('Add notes about your workout (optional)');

        userEvent.type(input, "Worked out all night");
    
        expect(input).toHaveValue("Worked out all night");
    });
});

describe('Worokut duration input', () => {
    it("has correct value after user input", () => {
        render(<WorkoutForm />, { wrapper: Wrapper });
        const input = screen.getByPlaceholderText('60');

        userEvent.type(input, "65");
    
        expect(input).toHaveValue(65);
    });
});