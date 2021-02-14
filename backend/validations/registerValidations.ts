import {body} from 'express-validator'

export const registerValidations = [
        body('email', 'Введите e-mail')
            .isEmail()
            .withMessage('Неверный формат e-mail')
            .normalizeEmail()
            .isLength({max: 50})
            .withMessage('Максимальная допустимая длина e-mail 50 символов'),
        body('fullname', 'Введите имя')
            .isString()
            .isLength({max: 50})
            .withMessage('Максимальная допустимая длина имени 50 символов'),
        body('username', 'Введите логин')
            .isString()
            .isLength({min: 2, max: 40})
            .withMessage('Допустимое кол-во символов в логине от 2 до 40'),
        body('password')
            .isString()
            .isLength({min: 8})
            .withMessage('Пароль должен содержать не менее 8 символов')
            .custom((value, {req}) => {
                if (value !== req.body.password2) {
                    throw new Error('Пароли не совпадают');
                } 
                return true
            })
]