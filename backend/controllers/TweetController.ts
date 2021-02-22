import { Tweet } from '../models/Tweet'
import { Request, ICreateTweetReqBody } from './contracts'
import { Response } from 'express'
import { validationResult } from 'express-validator'
import mongoose from 'mongoose'

class TweetController {

    constructor() {
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
        this.show = this.show.bind(this)
        this.update = this.update.bind(this)
    }

    async index(_: Request, res: Response) {
        try {
            const tweets = await Tweet.find({}).populate('user').sort({createdAt: -1}).exec()

            res.status(200).json({
                status: 'success',
                data: tweets
            })
        } catch (err) {
            res.status(502).json({
                status: 'error',
                message: err
            })
        }
    }
    
    async create(req: Request<ICreateTweetReqBody>, res: Response) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const user = req.user
            
            if (!user) {
                return res.status(401).send()
            }

            const data: ICreateTweetReqBody = {
                text: req.body.text,
                userPlatform: req.body.userPlatform
            }

            const createdTweet = await Tweet.create({...data, user: user._id})

            await createdTweet.execPopulate()

            await this.index(req, res)
            
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err
            })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const tweetId = req.params.id
            const user = req.user
            
            if (!user) {
                return res.status(401).send()
            }

            if (mongoose.Types.ObjectId.isValid(tweetId)) {
                const tweet = await Tweet.findById(tweetId).exec()

                if (tweet) {
                    if (tweet.user._id.equals(user._id)) {
                        await tweet.remove();

                        await this.index(req, res)
                    } else {
                        res.status(401).send()
                    }
                } else {
                    res.status(404).send()
                }
            } else {
                res.status(403).send()
            }
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err
            })
        }
    }

    async show(req: Request, res: Response) {
        try {
            const tweetId = req.params.id
            const validObjectId = mongoose.Types.ObjectId.isValid(tweetId)
            
            if (validObjectId) {
                const findedTweet = await Tweet.findById(tweetId).exec()
                if (findedTweet) {
                    const tweet = await findedTweet.populate('user').execPopulate()

                    res.status(200).json({
                        status: 'success',
                        data: tweet
                    })
                } else {
                    res.status(404).send()
                }
            } else {
                res.status(400).send()
            }
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err
            })
        }
    }

    async update(req: Request<ICreateTweetReqBody>, res: Response) {
        try {
            const tweetId = req.params.id
            const user = req.user
            
            if (!user) {
                return res.status(401).send()
            }

            if (mongoose.Types.ObjectId.isValid(tweetId)) {
                const tweet = await Tweet.findById(tweetId).exec()

                if (tweet) {
                    if (tweet.user._id.equals(user._id)) {
                        await tweet.updateOne({text: req.body.text})

                        await this.index(req, res)

                    } else {
                        res.status(401).send()
                    }
                } else {
                    res.status(404).send()
                }
            } else {
                res.status(403).send()
            }
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: err
            })
        }
    }
} 

export const TweetCtrl = new TweetController()