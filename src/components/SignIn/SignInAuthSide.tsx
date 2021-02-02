import React from 'react';
import cn from 'classnames';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TwitterIcon from '@material-ui/icons/Twitter';

import { signInStylesType } from '../../styles/SignInStyles';

type PropsType = {
    classes: signInStylesType
    handleSignUpModalOpen: () => void
    handleSignInModalOpen: () => void
}

const SignInAuthSide: React.FC<PropsType> = ({ classes, handleSignUpModalOpen, handleSignInModalOpen }) => {
    return (
        <section className={cn(classes.authSide, classes.sidesCommon)}>
            <div className={classes.sidesInner}>
                <TwitterIcon color='primary' className={classes.authSideTwitterIcon} />
                <Typography className={classes.authSideTitle}>Узнайте, что происходит в мире прямо сейчас</Typography>
                <Typography className={classes.authSideSubtitle}>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                <Button variant='contained' color='primary' onClick={handleSignUpModalOpen} className={classes.authSideButton}>
                    Зарегистрироваться
                    </Button>
                <Button variant='outlined' color='primary' onClick={handleSignInModalOpen} className={classes.authSideButton}>
                    Войти
                </Button>
            </div>
        </section>
    )
}

export default SignInAuthSide;