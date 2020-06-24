import React from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { signInWIthGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils'

class SignInComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error(error);
        }
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="email"
                    value={this.state.email}
                    label="email"
                    handleChange={this.handleInputChange} required />
                <FormInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    label="password"
                    handleChange={this.handleInputChange} required />
                <div className="buttons">

                    <CustomButton type="submit">Submit</CustomButton>
                    <CustomButton onClick={signInWIthGoogle} isGoogleSignIn>
                        Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    }
}

export default SignInComponent;