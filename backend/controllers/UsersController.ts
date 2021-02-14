import { User } from '../models/User'
import { Request, ICreateUserReqBody } from './contracts'
import { NextFunction, Response } from 'express'
import { validationResult } from 'express-validator'
import { generateHash } from '../utils/generateHash'
import { config } from '../config'
import { transport } from '../core/transport'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

class UserController {
    async index(_: Request, res: Response) {
        try {
            const users = User.find({}).exec()

            res.json({
                status: 'success',
                data: users
            })
        } catch (err) {
            res.json({
                status: 'error',
                message: err
            })
        }
    }
    async create(req: Request<ICreateUserReqBody>, res: Response) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            await User.findOne({email: req.body.email}).then(person => {
                if (person) {
                    res.status(403).json({
                        status: 'error',
                        message: 'Пользователь с таким e-mail уже существует'
                    })
                    throw new Error('Пользователь с таким e-mail уже существует')
                }
            })

            await User.findOne({username: req.body.username}).then(person => {
                if (person) {
                    res.status(403).json({
                        status: 'error',
                        message: 'Введенный логин занят другим пользователем'
                    })
                    throw new Error('Пользователь с таким e-mail уже существует')
                }
            })

            const password = await generateHash(req.body.password)
            const confirmHash = await generateHash(req.body.email)

            const data: ICreateUserReqBody = {
                email: req.body.email,
                fullname: req.body.fullname,
                username: req.body.username,
                password,
            }

            const user = await User.create({...data, confirmHash})

            transport.sendMail({
                from: 'admin@twitter.kz',
                to: req.body.email,
                subject: 'Подтверждение регистрации на Twitter Clone',
                html: `Поздравляем с успешной регистрацией на Twitter Clone. 
                       Теперь осталось лишь подтвердить регистрацию, пройдя по ссылке 
                       <a href="http://localhost:${config.PORT}/users/verify?confirmHash=${confirmHash}">
                            http://localhost:${config.PORT}/users/verify?confirmHash=${confirmHash}
                       </a>`
            }, async (err: Error | null) => {
                if (err) {
                    res.status(500).json({
                        status: 'error',
                        message: err 
                    })
                    await User.findOneAndRemove({id: user._id})
                    throw new Error('Ошибка при отправке письма на почту')
                } else {
                    console.log(`Письмо отправлено на ${req.body.email}`)
                }
            })

            res.status(201).json({
                status: 'success',
                data: user 
            })
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err
            })
        }
    }

    async verify(req: Request, res: Response) {
        try {
            const confirmHash = req.query.confirmHash as string; 

            await User.findOneAndUpdate({confirmHash}, {confirmed: true}, {new: true}).then(person => {
                if (person) {
                    res.status(200).json({
                        status: 'success',
                        data: person
                    })
                } else {
                    res.status(404).json({
                        status: 'error',
                        message: 'Пользователь не найден'
                    })
                    throw new Error('Пользователь не найден')
                }
            })
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err
            })
        }
    }

    async show(req: Request, res: Response) {
        try {
            const id = req.params.id
            const validObjectId = mongoose.Types.ObjectId.isValid(id)
            
            if (validObjectId) {
                const user = await User.findOne({_id: id})
                if (user) {
                    res.status(200).json({
                        status: 'success',
                        data: user
                    })
                } else {
                    res.status(404).json({
                        status: 'error',
                        message: 'Пользователь не найден'
                    })
                }
            } else {
                res.status(400).json({
                    status: 'error',
                    message: 'Некорректный запрос'
                })
            }
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err
            })
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.user
            
            if (!user) {
                res.status(400).json({
                    status: 'error',
                    message: 'Неверное имя пользователя/e-mail или пароль'
                })
                throw new Error('Неверное имя пользователя/e-mail или пароль')
            }
            req.login(
                user,
                { session: false },
                async (error) => {
                  if (error) return next(error);
    
                  const token = jwt.sign({ user }, config.SESSION_SECRET);
    
                  return res.status(200).json({
                    status: 'success',
                    data: user,
                    token 
                  });
                }
            );
        } catch (err) {
            return next(err);
        }
    }

    async profile(req: Request, res: Response) {
        res.json({
            status: 'success',
            data: req.user
        })
    }
} 

export const UserCtrl = new UserController()