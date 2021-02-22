import express from 'express'
import {ParamsDictionary} from 'express-serve-static-core'
import cloudinary from 'cloudinary'

export interface ICreateUserReqBody {
    email: string
    fullname: string
    username: string
    password: string
}

export interface ICreateTweetReqBody {
    text: string,
    userPlatform: string
}

export interface IUploadFile extends Pick<cloudinary.UploadApiResponse, 'filename' | 'size' | 'ext' | 'url' | 'user'> {
    _id?: string
} 

export type Request<R = any> = express.Request<ParamsDictionary, any, R> 

