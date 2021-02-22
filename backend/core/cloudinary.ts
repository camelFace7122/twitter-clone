import cloudinary from 'cloudinary'
import { config } from '../config';

// @ts-ignore
cloudinary.config({ 
    cloud_name: config.CLOUDINARY_API_NAME, 
    api_key: config.CLOUDINARY_API_KEY, 
    api_secret: config.CLOUDINARY_API_SECRET 
});

export { cloudinary }