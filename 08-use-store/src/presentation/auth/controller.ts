import { Request, Response } from "express";

export class AuthController {

    constructor() { }

    registerUser = (req: Request, res: Response) => {

        res.json('registerUser')

    }
    loguinUser = (req: Request, res: Response) => {

        res.json('loguinUser')

    }
    validateEmail = (req: Request, res: Response) => {

        res.json('validateEmail')

    }
}