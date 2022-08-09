import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch: workoutsDispatch} = useWorkoutsContext();

    const logout = () => {
        // Remove stored user from local storage
        localStorage.removeItem('user');

        // Dispatch logout to clear auth context
        dispatch({type: 'LOGOUT'});

        // Dispatch to clear workouts state
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null});
    }

    return {logout};
}