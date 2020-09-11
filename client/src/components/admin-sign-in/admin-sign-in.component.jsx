import React ,{ useEffect }from 'react';
import './admin-sign-in.styles.scss';
import SignInForm from '../sign-in-form/sign-in-form.component'
import { connect } from 'react-redux';
import { emailSignInStart } from '../../redux/user/user.actions';
import {  createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'

export function AdminSignIn({ signIn ,user, history, match}) {

    useEffect(() => {
        if (user?.roles['admin']) {
            history.push('/admin');
        }
    }, [user]);

    const onSubmit = (email, password) => {
        signIn(email, password);
    }

    return (
        <div className="admin-sign-in__form-container">
            <SignInForm onSubmit={onSubmit} />
        </div>);
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signIn: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn)