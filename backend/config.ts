import dotenv from 'dotenv'
import path from 'path'

const root = path.join.bind(this, __dirname)
dotenv.config({ path: root('.env') })

interface Config {
    PORT: number
    MONGO_URI: string
    IS_PRODUCTION: boolean
    SESSION_SECRET: string
    NODEMAILER_EMAIL?: string
    NODEMAILER_PASS?: string
    SALT_ROUNDS: number
}

export const config: Config = {
    PORT: Number(process.env.PORT) || 8888,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:127.0.0.1:27017/twitter-clone',
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    SESSION_SECRET: process.env.SESSION_SECRET || Math.random().toString(36).substr(2),
    NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
    NODEMAILER_PASS: process.env.NODEMAILER_PASS,
    SALT_ROUNDS: process.env.SALT_ROUNDS && Number(process.env.SALT_ROUNDS) || 10
}