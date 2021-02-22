import {body} from 'express-validator'

export const tweetValidation = [
        body('text', 'Поле не должно быть пустым')
            .isString()
            .isLength({max: 280})
            .withMessage('Превышен лимит символов: 280'),
]