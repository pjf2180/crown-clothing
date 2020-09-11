import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

export default function SignInForm({ onSubmit }) {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSubmit(email, password);
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return <div className="sign-in">
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="email"
                value={email}
                label="email"
                handleChange={handleInputChange} required />
            <FormInput
                type="password"
                name="password"
                value={password}
                label="password"
                handleChange={handleInputChange} required />

            <div className="buttons">
                <CustomButton type="submit">Submit</CustomButton>
            </div>
        </form>
    </div>
}
