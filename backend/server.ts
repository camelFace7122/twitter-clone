import express from 'express'
import { config } from './config'
import { UserCtrl } from './controllers/UsersController'
import './core/db'
import { registerValidations } from './validations/registerValidations'
import { passport } from './core/passport'

const app = express()

app.use(express.json())
app.use(passport.initialize())

app.get('/', (_, res: express.Response) => {
    res.send('Salam Aleikum')
})

app.get('/users', UserCtrl.index)
app.get('/users/:id', UserCtrl.show)
app.post('/users', registerValidations, UserCtrl.create)
app.post('/login', passport.authenticate('local', {session: false}), UserCtrl.login)
app.get('/profile', passport.authenticate('jwt', { session: false }), UserCtrl.profile)
app.get('/users/verify', UserCtrl.verify)

app.listen(config.PORT, (): void => {
    console.log(`Application is started on port ${config.PORT}`)
})
