import { IUploadFile, Request } from './contracts'
import { NextFunction, Response } from 'express'
import { cloudinary } from '../core/cloudinary'
import { UploadFile } from '../models/UploadFile'

class UploadFileController {
    async upload(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.user
            
            if (!user) {
                return res.status(401).send()
            }
            const file: Express.Multer.File = req.file

            cloudinary.v2.uploader.upload_stream({
                resource_type: "auto"
            },
            (
                error: cloudinary.UploadApiErrorResponse | undefined,
                result: cloudinary.UploadApiResponse | undefined,
            ) => {
                if (error || !result) {
                    return res.status(500).json({
                        status: 'error',
                        message: error || 'Ошибка загрузки файла',
                    })
                } 

                const fileData: Pick<cloudinary.UploadApiResponse, 'filename' | 'size' | 'ext' | 'url' | 'user'> = {
                    filename: result.original_filename + '-' + Date.now().toString(36),
                    size: result.bytes,
                    ext: result.format,
                    url: result.url,
                    user: user._id
                }
                
                UploadFile.create(fileData)
                .then((newFile: IUploadFile) => {
                    res.json({
                        status: 'success',
                        data: newFile
                    })
                })
                .catch(err => {
                    res.json({
                        status: 'error',
                        message: err
                    })
                })
            }
            ).end(file.buffer)

        } catch (err) {
            return next(err);
        }
    }
} 

export const UploadFileCtrl = new UploadFileController()