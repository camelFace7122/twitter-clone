import mongoose, { Schema, model, Document, Model } from 'mongoose'
import { UserSchema } from './User'

interface ITweet {
    _id?: string
    text: string
    user: UserSchema
    createdAt: Date
    userPlatform: string
}

export type TweetSchema = ITweet & Document

const tweetSchema = new Schema<TweetSchema>({
    text: {
        type: String,
        required: true,
        maxLength: 280
    },
    userPlatform: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
})

export const Tweet: Model<TweetSchema> = model('Tweet', tweetSchema)