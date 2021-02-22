import React from 'react';
import { useSelector } from 'react-redux';

import SignUpModal from '../components/SignIn/SignUpModal';
import SignInModal from '../components/SignIn/SignInModal';
import SignInBenefitsSide from '../components/SignIn/SignInBenefitsSide';
import SignInAuthSide from '../components/SignIn/SignInAuthSide';

import { selectAuthLoadingState, selectRegisterLoadingState } from '../store/ducks/auth/selectors';
import withSnackbar from '../hoc/withSnackbar';

import { useSignInStyles } from '../styles/SignInStyles';

const SignInModalWithSnackbar = withSnackbar(SignInModal, 'Авторизация прошла успешно!', 'Неверный логин или пароль')
const SignUpModalWithSnackbar = withSnackbar(SignUpModal, 'Пользователь успешно зарегистрирован', 'Пользователь с таким email или именем пользователя уже существует')

const SignIn = () => {
    const [signUpModalOpen, setSignUpModalOpen] = React.useState(false);
    const [signInModalOpen, setSignInModalOpen] = React.useState(false);

    const authLoadingState = useSelector(selectAuthLoadingState)
    const registerLoadingState = useSelector(selectRegisterLoadingState)

    const classes = useSignInStyles()

    const handleSignUpModalOpen = () => {
        setSignUpModalOpen(true);
    };

    const handleSignUpModalClose = () => {
        setSignUpModalOpen(false);
    };

    const handleSignInModalOpen = () => {
        setSignInModalOpen(true)
    }

    const handleSignInModalClose = () => {
        setSignInModalOpen(false)
    }

    return (
        <div className={classes.wrapper}>
            <SignInBenefitsSide classes={classes} />
            <SignInAuthSide classes={classes} handleSignUpModalOpen={handleSignUpModalOpen} handleSignInModalOpen={handleSignInModalOpen} />
            <SignUpModalWithSnackbar classes={classes} handleClose={handleSignUpModalClose} open={signUpModalOpen} status={registerLoadingState} />
            <SignInModalWithSnackbar classes={classes} handleClose={handleSignInModalClose} open={signInModalOpen} status={authLoadingState} />
        </div>
    )
}

export default SignIn