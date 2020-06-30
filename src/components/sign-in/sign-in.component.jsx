import React from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

class SignInComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        console.log('Hello world');
        event.preventDefault();
        const { emailSignIn } = this.props;
        const { email, password } = this.state;
        emailSignIn(email, password);
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        const { googleSignIn } = this.props;

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
                    <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
                        Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignIn: () => dispatch(googleSignInStart()),
    emailSignIn: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignInComponent);