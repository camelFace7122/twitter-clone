import nodemailer from 'nodemailer'
import { config } from '../config'

const options = {
    service: 'gmail',
    auth: {
        user: config.NODEMAILER_EMAIL,
        pass: config.NODEMAILER_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
} 

export const transport = nodemailer.createTransport(options)
