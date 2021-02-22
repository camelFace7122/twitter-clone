import { Schema, model, Document, Model } from 'mongoose'
import bcrypt from 'bcrypt'
import { config } from '../config'

interface IUser {
    _id?: string
    email: string
    fullname: string
    username: string
    password: string
    confirmHash: string
    confirmed?: boolean
    isValidPassword: (password: IUser['password']) => Promise<boolean>
}

export type UserSchema = IUser & Document

const userSchema = new Schema<UserSchema>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true   
    },
    confirmHash: {
        type: String,
        required: true,
        unique: true
    },
    confirmed: {
        type: Boolean,
        default: false
    }
})

userSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password + config.SESSION_SECRET, user.password);
  
    return compare;
}

userSchema.set('toJSON', { 
    transform: function (_: any, ret: any) {
        delete ret.password
        delete ret.confirmHash
        return ret;
    }
});

export const User: Model<UserSchema> = model('User', userSchema)