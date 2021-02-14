import express from 'express'
import {ParamsDictionary} from 'express-serve-static-core'

export interface ICreateUserReqBody {
    email: string
    fullname: string
    username: string
    password: string
}

export type Request<R = any> = express.Request<ParamsDictionary, any, R> 

