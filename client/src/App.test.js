import { render, screen } from '@testing-library/react';
import { WorkoutsProvider } from "./context/WorkoutsContext";
import { ExercisesProvider } from "./context/ExercisesContext";
import "@testing-library/jest-dom";
import App from './App';

const Wrapper = ({ children }) => {
    return (
        <WorkoutsProvider>
            <ExercisesProvider>
                    {children}
            </ExercisesProvider>
        </WorkoutsProvider>
    );
}

describe('App component', () => {
  it('renders the App', () => {
    render(<App />, { wrapper: Wrapper});
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
})

