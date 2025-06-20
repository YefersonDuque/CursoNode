import { CustomError } from "../errors/custom.error";

export class UserEntity {
    constructor(

        public id: string,
        public name: string,
        public email: string,
        public emailValidated: boolean,
        public password: string,
        public role: string[],
        public img?: string,

    ) { }

    static fromObject(object: { [key: string]: any }) {
        const { id, _id, name, email, emailValidated, password, role, img } = object;

        if (!id && !_id) {
            throw CustomError.badReques('Missing id');
        }                                

        if (!name) throw CustomError.badReques('Missing name');

        if (!email) throw CustomError.badReques('Missing email');

        if (emailValidated) throw CustomError.badReques('Missing emailValidated');

        if (!password) throw CustomError.badReques('Missing password');

        if (!role) throw CustomError.badReques('Missing role');

        return new UserEntity(id || _id, name, email, emailValidated, password, role, img);

    }
}