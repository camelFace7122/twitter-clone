import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';

import TwitterIcon from '@material-ui/icons/Twitter';

import { signInStylesType } from '../../styles/SignInStyles';
import { ISignInFormData } from './SignInTypes';

import { authorize } from '../../store/ducks/auth/actionCreators';

type PropsType = {
    classes: signInStylesType
    open: boolean
    handleClose: () => void
    isLoading: boolean
}

const signInSchema = yup.object().shape({
    username: yup.string().required('Введите имя пользователя или адрес электронной почты'),
    password: yup.string().min(8, 'Пароль должен содержать не менее 8 символов').required('Введите пароль'),
});

const SignInModal: React.FC<PropsType> = ({ classes, open, handleClose, isLoading }) => {
    const { control, handleSubmit, errors } = useForm<ISignInFormData>({
        resolver: yupResolver(signInSchema)
    });

    const dispatch = useDispatch() 

    const onSubmit = (data: ISignInFormData) => {
        dispatch(authorize(data))
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" 
                    className={classes.signInModal}
                    PaperProps={{elevation: undefined}}
            >
                <DialogContent>
                    <div className={classes.signInModalTopWrapper}>
                        <TwitterIcon color='primary' className={classes.authModalTopIcon} />
                        <DialogTitle id="form-dialog-title" className={classes.authModalTitle}>
                            <Typography className={classes.authModalTitleText}>Войти в твиттер</Typography>
                        </DialogTitle>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            control={control}
                            as={TextField}
                            name="username"
                            type="text"
                            id="login"
                            autoFocus
                            label="Адрес электронной почты или имя пользователя"
                            className={classes.authModalTextField}
                            fullWidth
                            variant='outlined'
                            helperText={errors.username?.message}
                            error={!!errors.username}
                            defaultValue=""
                        />
                        <Controller
                            control={control}
                            as={TextField}
                            name="password"
                            type="password"
                            id="password"
                            label="Пароль"
                            className={classes.authModalTextField}
                            fullWidth
                            variant='outlined'
                            helperText={errors.password?.message}
                            error={!!errors.password?.message}
                            defaultValue=""
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth className={classes.authModalLoginBtn} disabled={isLoading}>
                            {
                                isLoading ? <CircularProgress size={20} /> : 'Войти'
                            }
                        </Button>
                    </form>
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