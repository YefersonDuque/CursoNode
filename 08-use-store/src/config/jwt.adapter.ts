import jwt, { SignOptions } from 'jsonwebtoken';
import { resolve } from 'path';
import { envs } from './envs';

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter {

    static async generateToken(payload: any, duration: string = '2h') {

        return new Promise((resolve) => {
            jwt.sign(payload, "SEED", { expiresIn: duration } as SignOptions, (err, token) => {

                if (err) return resolve(null);

                resolve(token);
            });

        })
    }

    static validateToken(token: string) {
        throw new Error('Not implemented');
        return;
    }
}