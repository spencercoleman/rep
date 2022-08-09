import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { IoBarbell } from 'react-icons/io5';
import StyledContainer from "../styles/StyledContainer";
import StyledForm from "../styles/StyledForm";
import Loader from "../components/Loader";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await login(email, password);
    }

    const handleDemoLogin = async () => {
        await login('demo@repsapp.com', 'repsdemopassword');
    }

    return (
        <>
            {!isLoading ? (
                <StyledContainer>
                    <h1><IoBarbell /> Reps</h1>
                    <StyledForm onSubmit={handleSubmit}>
                        <h2>Log in to your account</h2>
                        
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        {error && <p className="error">{error}</p>}

                        <button>Log In</button>
                        <div className="demo-login" onClick={handleDemoLogin}>Try Demo</div>
                    </StyledForm>
                    <p className="cta">
                        New to Reps? <Link to="/signup">Sign up for an account</Link>.
                    </p>
                </StyledContainer>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Login;