import React from 'react'
import './sign-in-sign-up.style.scss'
import SignInComponent from '../sign-in/sign-in.component'
import SignUp from '../sign-up/sign-up.component'

const SignInAndSignUpPage = () => (
    <div className="sign-in-sign-up">
        <div className="column">
            <SignInComponent></SignInComponent>
        </div>
        <div className="column">
        <SignUp></SignUp>
        </div>
    </div>
)

export default SignInAndSignUpPage;