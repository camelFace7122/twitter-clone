import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import TwitterIcon from '@material-ui/icons/Twitter';

import { signInStylesType } from '../../styles/SignInStyles';
import { ISignUpFormData } from './SignInTypes';
import { register } from '../../store/ducks/auth/actionCreators';

import { selectRegisterIsLoading, selectRegisterIsLoaded, selectRegisteredUser } from '../../store/ducks/auth/selectors';


type PropsType = {
    classes: signInStylesType
    open: boolean
    handleClose: () => void
}

const signUpSchema = yup.object().shape({
    fullname: yup.string().required('Введите имя').max(50, 'Максимальная допустимая длина имени 50 символов'),
    username: yup.string().required('Введите имя пользователя').min(2, 'Допустимое кол-во символов в логине от 2 до 40').max(40, 'Допустимое кол-во символов в логине от 2 до 40'),
    email: yup.string().required('Введите адрес электронной почты').email('Неверный формат e-mail').max(50, 'Максимальная допустимая длина e-mail 50 символов'),
    password: yup.string().required('Введите пароль').min(8, 'Пароль должен содержать не менее 8 символов'),
    password2: yup.string().required('Повторите пароль').oneOf([yup.ref('password'), null], 'Пароли не совпадают')
});

const SignUpModal: React.FC<PropsType> = ({ classes, open, handleClose }) => {
    const { control, handleSubmit, errors } = useForm<ISignUpFormData>({
        resolver: yupResolver(signUpSchema)
    });

    const registerIsLoading = useSelector(selectRegisterIsLoading)
    const registerIsLoaded = useSelector(selectRegisterIsLoaded)
    const registeredUser = useSelector(selectRegisteredUser)

    const dispatch = useDispatch()

    const onSubmit = (data: ISignUpFormData) => {
        dispatch(register(data))
    }

    let [month, setMonth] = useState<undefined | number>()
    let [day, setDay] = useState<undefined | number>()
    let [daysCount, setDaysCount] = useState<number>(31)
    let [daysArray, setDaysArray] = useState<Array<number>>([])
    let [yearsArray, setYearsArray] = useState<Array<number>>([])
    let [yearsCount, setYearsCount] = useState<undefined | number>()
    let [year, setYear] = useState<undefined | number>()

    const changeHandler = (setter: React.Dispatch<React.SetStateAction<any>>, event: ChangeEvent<any>) => {
        const isMonth = setter === setMonth
        const selectedValue = event.target.value
        const monthValue = isMonth ? selectedValue : month
        const yearValue = isMonth ? year : selectedValue

        setter(selectedValue)

        if (yearValue && monthValue) {
            const daysInMonth = 32 - new Date(yearValue, monthValue, 32).getDate();
            setDaysCount(daysInMonth)
        } else if (!yearValue && monthValue) {
            const currentYear = new Date().getFullYear()
            const daysInMonth = 32 - new Date(currentYear, monthValue, 32).getDate();
            setDaysCount(daysInMonth)
        } else {
            setDaysCount(31)
        }
    }

    const handleMonthChange = (e: ChangeEvent<any>) => {
        changeHandler(setMonth, e)
    }

    const handleDayChange = (e: ChangeEvent<any>) => {
        setDay(e.target.value)
    }

    const handleYearChange = (e: ChangeEvent<any>) => {
        changeHandler(setYear, e)
    }

    useEffect(() => {
        setYearsCount(new Date().getFullYear() - 1900)
        let yearsArray = yearsCount ? Array.from({ length: yearsCount }, (item, index) => index + 1901).sort((a, b) => b - a) : []
        setYearsArray(yearsArray)
    }, [yearsCount])

    useEffect(() => {
        let daysArray = Array.from({ length: daysCount }, (item, index) => index + 1)
        setDaysArray(daysArray)
    }, [daysCount])


    let daysOptionsElements = daysArray.map((i: number) => <option key={i} value={i}>{i}</option>)
    let yearsOptionsElements = yearsArray ? yearsArray.map((i: number) => <option key={i} value={i}>{i}</option>) : null

    return (
        <div>
            <Dialog open={open} onClose={handleClose} className={classes.signUpModal}>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.authModalTopWrapper}>
                            <div className={classes.authModalTopPressingBlock}></div>
                            <TwitterIcon color='primary' className={classes.authModalTopIcon} />
                            <div className={classes.authModalTopPressingBlock}>
                                {
                                    registerIsLoaded ? null   
                                    : <Button type="submit" variant="contained" color="primary" className={classes.authModalRegisterBtn} disabled={registerIsLoading}>
                                        {
                                            registerIsLoading ?
                                                <CircularProgress size={20} /> :
                                                'Далее'
                                        }
                                    </Button>
                                }
                            </div>
                        </div>

                        {
                            registerIsLoaded ?
                                <Alert severity="info" style={{marginTop: 15, maxHeight: 400}}>
                                    <AlertTitle>Осталось подтвердить регистрацию на электронной почте</AlertTitle>
                                    <p>На вашу электронную почту <strong>{registeredUser?.email}</strong> было отправлено письмо для подтверждения регистрации.</p>
                                    Пройдите по ссылке, указанной в письме подтверждения, чтобы пройти верификацию
                                </Alert> : 
                                <>
                                    <DialogTitle id="form-dialog-title" className={classes.authModalTitle}>
                                        <Typography className={classes.authModalTitleText}>Создайте учетную запись</Typography>
                                    </DialogTitle>
                                    <Controller
                                        name='fullname'
                                        control={control}
                                        error={!!errors.fullname}
                                        helperText={errors.fullname?.message}
                                        as={TextField}
                                        className={classes.authModalTextField}
                                        autoFocus
                                        id="fullname"
                                        label="Имя"
                                        type="text"
                                        fullWidth
                                        variant='outlined'
                                        defaultValue=""
                                    />
                                    <Controller
                                        name='email'
                                        control={control}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        as={TextField}
                                        className={classes.authModalTextField}
                                        id='email'
                                        label='Адрес электронной почты'
                                        type='email'
                                        fullWidth
                                        variant='outlined'
                                        defaultValue=""
                                    />
                                    <Controller
                                        name='username'
                                        control={control}
                                        error={!!errors.username}
                                        helperText={errors.username?.message}
                                        as={TextField}
                                        className={classes.authModalTextField}
                                        id='username'
                                        label='Имя пользователя'
                                        type='username'
                                        fullWidth
                                        variant='outlined'
                                        defaultValue=""
                                    />
                                    <Controller
                                        name='password'
                                        control={control}
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                        as={TextField}
                                        className={classes.authModalTextField}
                                        id='password'
                                        label='Пароль'
                                        type='password'
                                        fullWidth
                                        variant='outlined'
                                        defaultValue=""
                                    />
                                    <Controller
                                        name='password2'
                                        control={control}
                                        error={!!errors.password2}
                                        helperText={errors.password2?.message}
                                        as={TextField}
                                        className={classes.authModalTextField}
                                        id='password2'
                                        label='Повторите пароль'
                                        type='password'
                                        fullWidth
                                        variant='outlined'
                                        defaultValue=""
                                    />
                                </>
                        }
                    </form>

                    { 
                        !registerIsLoaded && <>
                        <div className={classes.authModalBirthDateFormDescription}>
                            <DialogContentText className={classes.authModalBirthDateFormTitle}>Дата рождения</DialogContentText>
                            <DialogContentText>
                                Эта информация не будет общедоступной. Подтвердите свой возраст,
                                даже если эта учетная запись предназначена для компании, домашнего животного
                                и т. д.
                                </DialogContentText>
                        </div>
                        <FormGroup className={classes.authModalBirthDateFormGroup}>
                            <FormControl variant="outlined" className={classes.monthFormControl}>
                                <InputLabel htmlFor="outlined-month-native-simple">Месяц</InputLabel>
                                <Select
                                    native
                                    value={month}
                                    onChange={handleMonthChange}
                                    label="Месяц"
                                    inputProps={{
                                        name: 'month',
                                        id: 'outlined-month-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={0}>Январь</option>
                                    <option value={1}>Февраль</option>
                                    <option value={2}>Март</option>
                                    <option value={3}>Апрель</option>
                                    <option value={4}>Май</option>
                                    <option value={5}>Июнь</option>
                                    <option value={6}>Июль</option>
                                    <option value={7}>Август</option>
                                    <option value={8}>Сентябрь</option>
                                    <option value={9}>Октябрь</option>
                                    <option value={10}>Ноябрь</option>
                                    <option value={11}>Декабрь</option>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.dayFormControl}>
                                <InputLabel htmlFor="outlined-day-native-simple">День</InputLabel>
                                <Select
                                    native
                                    value={day}
                                    onChange={handleDayChange}
                                    label="День"
                                    inputProps={{
                                        name: 'day',
                                        id: 'outlined-day-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    {daysOptionsElements}
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.yearFormControl}>
                                <InputLabel htmlFor="outlined-year-native-simple">Год</InputLabel>
                                <Select
                                    native
                                    value={year}
                                    onChange={handleYearChange}
                                    label="Год"
                                    inputProps={{
                                        name: 'year',
                                        id: 'outlined-year-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    {yearsOptionsElements}
                                </Select>
                            </FormControl>
                        </FormGroup>
                        </>
                    }

                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SignUpModal;