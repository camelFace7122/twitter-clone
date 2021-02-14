import bcrypt from 'bcrypt'
import { config } from '../config'

export async function generateHash(value: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(config.SALT_ROUNDS)
        return await bcrypt.hash(value + config.SESSION_SECRET, salt).then(hash => hash).catch((err) => { throw err })  
    } catch (err) {
        throw err
    }
}