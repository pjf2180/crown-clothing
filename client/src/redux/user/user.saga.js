import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from '../../redux/user/user.types'
import { auth, createUserProfileDocument, googleProvider, getCurrentUser, signOut } from '../../firebase/firebase.utils'
import { signInSuccess, signInFailure, signOutSuccess, signOutFailed, signUpSuccess, signUpFailed } from "./user.actions";

function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();

        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        console.log(error);
        yield put(
            signInFailure(error)
        )
    }
}
function* signInWithGoogleAsync() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        console.log(error);
        yield put(
            signInFailure(error)
        )
    }
}
function* signInWithEmailAsync({ payload }) {
    yield console.log(payload);
    try {
        const { user } = yield auth.signInWithEmailAndPassword(payload.email, payload.password);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        console.log(error);
        yield put(
            signInFailure(error)
        );
    }
}
function* isUserAuthenticated() {
    try {
        const currentUser = yield getCurrentUser();
        if (!currentUser) return
        yield getSnapshotFromUserAuth(currentUser);
    } catch (error) {
        yield put(signInFailure(error));
    }
}
function* userSignOut() {
    try {
        yield signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed());
    }
}
function* userSignUp(action) {
    console.log(action);
    const { payload: { email, password, displayName } } = action;
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield createUserProfileDocument(user, {displayName});
        yield put(signUpSuccess({ email, password }));
    } catch (e) {
        yield put(signUpFailed(e));
    }
}

export function* googleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogleAsync
    );
}
export function* signInWithEmailStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmailAsync
    )
}
export function* checkAuth() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}
export function* onSignOut() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        userSignOut
    )
}
export function* onSignUp() {
    yield takeLatest(
        UserActionTypes.SIGN_UP,
        userSignUp
    );
}
export function* onSignUpSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        signInWithEmailAsync)
}

export function* userSagas() {
    yield all([
        call(googleSignInStart),
        call(signInWithEmailStart),
        call(checkAuth),
        call(onSignOut),
        call(onSignUp),
        call(onSignUpSuccess)
    ]);
}