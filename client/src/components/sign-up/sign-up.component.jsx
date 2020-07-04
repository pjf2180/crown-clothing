import React from 'react'
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signUp } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignUp = ({signUp}) => {
    const [signUpData, setSignUpData] = useState(
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    const { displayName, email, password, confirmPassword } = signUpData;

    const handleChange = event => {
        const { name, value } = event.target;
        setSignUpData({ ...signUpData, [name]: value })
    }
    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }
        signUp({ displayName, email, password });
    }
    return (
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput onChange={handleChange}
                    type="text"
                    name="displayName"
                    value={displayName}
                    label='Display Name' required></FormInput>
                <FormInput onChange={handleChange}
                    type="email"
                    name="email"
                    value={email}
                    label='Email' required></FormInput>
                <FormInput onChange={handleChange}
                    type="password"
                    name="password"
                    value={password}
                    label='Choose a password' required></FormInput>
                <FormInput onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label='Confirm Password' required></FormInput>
                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    signUp: signUpData => dispatch(signUp(signUpData))
});
export default connect(null, mapDispatchToProps)(SignUp);