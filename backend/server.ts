import express from 'express'
import { config } from './config'
import { UserCtrl } from './controllers/UsersController'
import './core/db'
import { registerValidations } from './validations/registerValidations'
import { tweetValidation } from './validations/tweetValidation'
import { passport } from './core/passport'
import { TweetCtrl } from './controllers/TweetController'
import multer from 'multer'
import { UploadFileCtrl } from './controllers/UpdateFileController'

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fieldSize: 8*1000000 
    }
})

const app = express()

app.use(express.json())
app.use(passport.initialize())

app.get('/', (_, res: express.Response) => {
    res.send('Salam Aleikum')
})

app.get('/users', UserCtrl.index)
app.get('/users/verify', UserCtrl.verify)
app.get('/users/:id', UserCtrl.show)
app.post('/users', registerValidations, UserCtrl.create)
app.post('/login', passport.authenticate('local', {session: false}), UserCtrl.login)
app.get('/profile', passport.authenticate('jwt', { session: false }), UserCtrl.profile)

app.get('/tweets', TweetCtrl.index)
app.get('/tweets/:id', TweetCtrl.show)
app.post('/tweets', tweetValidation, passport.authenticate('jwt', { session: false }), TweetCtrl.create)
app.delete('/tweets/:id', passport.authenticate('jwt', { session: false }), TweetCtrl.delete)
app.put('/tweets/:id', passport.authenticate('jwt', { session: false }), TweetCtrl.update)

app.post('/upload', passport.authenticate('jwt', { session: false }), upload.single('avatar'), UploadFileCtrl.upload)

app.listen(config.PORT, (): void => {
    console.log(`Application is started on port ${config.PORT}`)
})
