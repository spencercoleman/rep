import { useEffect, useState } from "react";
import { useExercisesContext } from "../hooks/useExercisesContext";
import { IoClose } from 'react-icons/io5';
import styled from "styled-components/macro";
import Section from "../components/Section"
import ExercisesTable from "../components/ExercisesTable"
import StyledCard from '../styles/StyledCard';
import Loader from "../components/Loader";

const StlyedFilters = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    overflow: hidden;
    margin-bottom: var(--spacing-md);

    select, button {
        flex-grow: 1;

        @media (min-width: 768px) {
            flex-grow: 0;
        }
    }

    input { 
        width: 100%;
        
        @media (min-width: 700px) {
            width: auto;
        }
    }

    .reset-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-xxs);
    }
`;

const Exercises = () => {
    const {exerciseList} = useExercisesContext();
    const [filteredExercises, setFilteredExercises] = useState(null);
    const [filterTerm, setFilterTerm] = useState('');
    const [filterForce, setFilterForce] = useState('');
    const [filterType, setFilterType] = useState('');
    const forces = ['Push', 'Pull'];
    const types = ['Abs', 'Arms', 'Back', 'Chest', 'Legs', 'Shoulders']

    const handleReset = () => {
        setFilterTerm('');
        setFilterForce('');
        setFilterType('');
    }

    useEffect(() => {
        const getFilteredExercises = () => {
            if (exerciseList) {
                const exercises = exerciseList.filter(exercise => {
                    return (exercise.name.toLowerCase().includes(filterTerm.toLowerCase())
                        && exercise.force.includes(filterForce)
                        && exercise.category.includes(filterType))
                });
                setFilteredExercises(exercises);
            }
        }
        getFilteredExercises();
    }, [exerciseList, filterTerm, filterForce, filterType]);

    return (
        <>
            { exerciseList ? (
                <main>
                    <h1>Exercises</h1>
                    <Section title="All Exercises">
                        <StlyedFilters>
                            <input type="text" onChange={(e) => setFilterTerm(e.target.value)} value={filterTerm} placeholder="Search for an exercise..." />
                            
                            <select id="force" value={filterForce} onChange={(e) => setFilterForce(e.target.value)}>
                                <option value="" disabled>Force</option>
                                {forces.map(force => <option key={force} value={force}>{force}</option>)}
                            </select>
                            
                            <select id="type" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                                <option value="" disabled>Type</option>
                                {types.map(type => <option key={type} value={type}>{type}</option>)}                        
                            </select>
                            
                            {(filterTerm.length > 0 || filterForce.length > 0 || filterType.length > 0) && (
                                <button className="reset-button" onClick={handleReset}><IoClose /> Reset Filters</button>
                            )}
                        </StlyedFilters>

                        <StyledCard>
                            <ExercisesTable exercises={filteredExercises} />
                        </StyledCard>
                    </Section>
                </main>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Exercises;