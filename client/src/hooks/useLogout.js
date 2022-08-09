import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const {dispatch} = useAuthContext();

    const logout = () => {
        // Remove stored user from local storage
        localStorage.removeItem('user');

        // Dispatch logout to clear auth context
        dispatch({type: 'LOGOUT'});
    }

    return {logout};
}