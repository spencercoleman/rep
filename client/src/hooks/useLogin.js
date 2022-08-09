import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);

        if (error) {
            setError(null);
        }

        const response = await fetch('/api/users/login', {
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
            // Save user to local storage
            localStorage.setItem('user', JSON.stringify(json));	
            
            // Update context
            dispatch({type: 'LOGIN', payload: json});

            setIsLoading(false);
        }
    }

    return {login, isLoading, error};
} 