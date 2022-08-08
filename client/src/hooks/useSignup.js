import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext();

    const signUp = async (email, password) => {
        setIsLoading(true);

        if (error) {
            setError(null);
        }

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error)
        }

        if (response.ok) {
            // Update context
            dispatch({type: 'LOGIN', payload: json});

            setIsLoading(false);
        }
    }

    return {signUp, isLoading, error};
} 