import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignInComponent = ({googleSignIn,emailSignIn}) => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignIn(email, password);
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return <div className="sign-in">
        <h2>I already have an account</h2>
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
                <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
                    Sign in with Google</CustomButton>
            </div>
        </form>
    </div>

}

const mapDispatchToProps = dispatch => ({
    googleSignIn: () => dispatch(googleSignInStart()),
    emailSignIn: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignInComponent);