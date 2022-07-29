import { useContext } from "react";
import { ExercisesContext } from "../context/ExercisesContext";

export const useExercisesContext = () => {
    const context = useContext(ExercisesContext);

    if (!context) {
        throw Error('Context must be used inside of ExercisesProvider')
    }

    return context;
}