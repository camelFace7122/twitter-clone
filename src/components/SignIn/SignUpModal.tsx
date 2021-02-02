import React, { ChangeEvent, useEffect, useState } from 'react';

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
import Link from '@material-ui/core/Link';

import TwitterIcon from '@material-ui/icons/Twitter';

import { signInStylesType } from '../../styles/SignInStyles';

type PropsType = {
    classes: signInStylesType
    open: boolean
    handleClose: () => void
}

const SignUpModal: React.FC<PropsType> = ({ classes, open, handleClose }) => {
    let [month, setMonth] = useState<undefined | number>()
    let [day, setDay] = useState<undefined | number>()
    let [daysCount, setDaysCount] = useState<number>(31)
    let [daysArray, setDaysArray] = useState<Array<number>>([])
    let [yearsArray, setYearsArray] = useState<Array<number>>([])
    let [yearsCount, setYearsCount] = useState<undefined | number>()
    let [year, setYear] = useState<undefined | number>()
    let [isEmailField, setIsEmailField] = useState<boolean>(false)

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


    let daysOptionsElements = daysArray.map(i => <option value={i}>{i}</option>)
    let yearsOptionsElements = yearsArray ? yearsArray.map((i: number) => <option value={i}>{i}</option>) : null

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.signUpModal}>
                <DialogContent className={classes.authModalTopWrapper}>
                    <div className={classes.authModalTopPressingBlock}></div>
                    <TwitterIcon color='primary' className={classes.authModalTopIcon} />
                    <div className={classes.authModalTopPressingBlock}>
                        <Button variant="contained" color="primary" className={classes.authModalRegisterBtn}>
                            Далее
                        </Button>
                    </div>
                </DialogContent>

                <DialogContent>
                    <DialogTitle id="form-dialog-title" className={classes.authModalTitle}>
                        <Typography className={classes.authModalTitleText}>Создайте учетную запись</Typography>
                    </DialogTitle>
                    <TextField
                        className={classes.authModalTextField}
                        autoFocus
                        id="name"
                        label="Имя"
                        type="text"
                        fullWidth
                        variant='outlined'
                    />
                    <TextField
                        className={classes.authModalTextField}
                        id={isEmailField ? 'email' : 'telephone'}
                        label={isEmailField ? 'Адрес электронной почты' : 'Телефон'}
                        type={isEmailField ? 'email' : 'tel'}
                        fullWidth
                        variant='outlined'
                    />
                    <Link
                        className={classes.authWaySwitcher}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            setIsEmailField(!isEmailField)
                        }}
                    >
                        {isEmailField ? 'Использовать телефон' : 'Использовать эл. почту'}
                    </Link>

                    <DialogContentText className={classes.authModalBirthDateFormDescription}>
                        <Typography className={classes.authModalBirthDateFormTitle}>Дата рождения</Typography>
                        <Typography>
                            Эта информация не будет общедоступной. Подтвердите свой возраст,
                            даже если эта учетная запись предназначена для компании, домашнего животного
                            и т. д.
                            </Typography>
                    </DialogContentText>
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
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SignUpModal;