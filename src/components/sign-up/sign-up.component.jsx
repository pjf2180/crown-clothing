import React from 'react'
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signUp } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { signUp } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }
        signUp({ displayName, email, password });
        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfileDocument(user, {displayName});
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     })
        // } catch (e) {
        //     console.error(e);
        // }
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput onChange={this.handleChange}
                        type="text"
                        name="displayName"
                        value={displayName}
                        label='Display Name' required></FormInput>
                    <FormInput onChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                        label='Email' required></FormInput>
                    <FormInput onChange={this.handleChange}
                        type="password"
                        name="password"
                        value={password}
                        label='Choose a password' required></FormInput>
                    <FormInput onChange={this.handleChange}
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label='Confirm Password' required></FormInput>
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUp: signUpData => dispatch(signUp(signUpData))
});
export default connect(null, mapDispatchToProps)(SignUp);