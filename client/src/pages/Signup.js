import { useState } from "react";
import { Link } from "react-router-dom";
import { IoBarbell } from 'react-icons/io5';
import StyledContainer from "../styles/StyledContainer";
import StyledForm from "../styles/StyledForm";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <StyledContainer>
            <h1><IoBarbell /> Reps</h1>
            <StyledForm onSubmit={handleSubmit}>
                <h2>Sign up for an account</h2>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button>Sign Up</button>
            </StyledForm>
            <p className="cta">
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </StyledContainer>
    )
}

export default Signup;