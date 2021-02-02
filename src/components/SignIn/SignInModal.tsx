import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import TwitterIcon from '@material-ui/icons/Twitter';

import { signInStylesType } from '../../styles/SignInStyles';

type PropsType = {
    classes: signInStylesType
    open: boolean
    handleClose: () => void
}

const SignInModal: React.FC<PropsType> = ({ classes, open, handleClose }) => {

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.signInModal}>
                <DialogContent>
                    <div className={classes.signInModalTopWrapper}>
                        <TwitterIcon color='primary' className={classes.authModalTopIcon} />
                        <DialogTitle id="form-dialog-title" className={classes.authModalTitle}>
                            <Typography className={classes.authModalTitleText}>Войти в твиттер</Typography>
                        </DialogTitle>
                    </div>
                    <TextField
                        className={classes.authModalTextField}
                        autoFocus
                        id="login"
                        label="Номер телефона, адрес электронной почты или имя пользователя"
                        type="text"
                        fullWidth
                        variant='outlined'
                    />
                    <TextField
                        className={classes.authModalTextField}
                        id={'password'}
                        label={'Пароль'}
                        type={'password'}
                        fullWidth
                        variant='outlined'
                    />
                    <Button variant="contained" color="primary" fullWidth className={classes.authModalLoginBtn}>
                        Войти
                    </Button>
                    <div className={classes.authModalFooter}>
                        <Link>Забыли пароль?</Link>
                        <span> · </span>
                        <Link>Зарегистрироваться в твиттере</Link>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SignInModal;