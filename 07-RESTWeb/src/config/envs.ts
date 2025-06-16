import 'dotenv/config';
import { get } from 'env-var';
import { Router } from 'express';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
}