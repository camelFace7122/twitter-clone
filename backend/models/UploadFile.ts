import mongoose, { Schema, model, Document, Model } from 'mongoose'
import { IUploadFile } from '../controllers/contracts'

export type UploadFileSchema = IUploadFile & Document

const uploadFileSchema = new Schema<UploadFileSchema>({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    filename: String,
    size: Number,
    ext: String,
    url: String,
}, {
    timestamps: true
})

export const UploadFile: Model<UploadFileSchema> = model('UploadFile', uploadFileSchema)