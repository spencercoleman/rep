import { useState, useEffect } from 'react';
import styled from "styled-components/macro";
import Section from "../components/Section"
import ExercisesTable from "../components/ExercisesTable"
import StyledCard from '../styles/StyledCard';

const StlyedSearch = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    overflow: hidden;
    margin-bottom: var(--spacing-md);
`;

const Exercises = () => {
    const [exercises, setExercises] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            const response = await fetch('/api/exercises');
            const data = await response.json();

            if (response.ok) {
                setExercises(data);
            }
        }
        fetchExercises();
    }, []);

    return (
        <>
            <h1>Exercises</h1>
            <Section title="All Exercises">
                <div>
                    <StlyedSearch>
                        <input type="text" placeholder="Search for an exercise..." />
                        <button>Search</button>
                    </StlyedSearch>
                </div>
                <StyledCard>
                    <ExercisesTable exercises={exercises} />
                </StyledCard>
            </Section>
        </>
    )
}

export default Exercises;