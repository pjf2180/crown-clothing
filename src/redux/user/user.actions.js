import UserActionTypes from './user.types'

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});
export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});
export const signOutFailed = () => ({
    type: UserActionTypes.SIGN_OUT_FAILURE
});
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});
export const signUp = signUpData => ({
    type: UserActionTypes.SIGN_UP,
    payload: signUpData
});
export const signUpSuccess = emailAndPassword => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: emailAndPassword
});
export const signUpFailed = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});
export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

