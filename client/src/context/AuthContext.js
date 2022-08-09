import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return { 
                user: action.payload 
            };
        case 'LOGOUT':
            return { 
                user: null 
            }
        default: 
            return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    // Check localstorage to see if user is stored
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        // If user is already stored, update auth state to logged in
        if (user) {
            dispatch({type: 'LOGIN', payload: user});
        }
    }, []);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}