import React from 'react';

import SignUpModal from '../components/SignIn/SignUpModal';
import SignInModal from '../components/SignIn/SignInModal';
import SignInBenefitsSide from '../components/SignIn/SignInBenefitsSide';
import SignInAuthSide from '../components/SignIn/SignInAuthSide';

import { useSignInStyles } from '../styles/SignInStyles';

const SignIn = () => {
    const [signUpModalOpen, setSignUpModalOpen] = React.useState(false);
    const [signInModalOpen, setSignInModalOpen] = React.useState(false);
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
            <SignUpModal classes={classes} handleClose={handleSignUpModalClose} open={signUpModalOpen} />
            <SignInModal classes={classes} handleClose={handleSignInModalClose} open={signInModalOpen} />
        </div>
    )
}

export default SignIn