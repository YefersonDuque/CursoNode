
import { bcryptAdapter, JwtAdapter } from "../../config";
import { UserModel } from "../../data/intex";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";

export class AuthService {

    constructor() { }

    public async registerUser(registerUserDto: RegisterUserDto) {

        const existUser = await UserModel.findOne({ email: registerUserDto.email });

        if (existUser) throw CustomError.badReques('Email already exist');

        try {
            const user = new UserModel(registerUserDto);

            // Encriptar la contraseña
            user.password = bcryptAdapter.hash(registerUserDto.password)

            await user.save();

            // JWT para autenticar usuario

            // Email de confirmación

            const { password, ...userEntity } = UserEntity.fromObject(user);

            const token = await JwtAdapter.generateToken({ id: user.id });
            
            return {
                user: userEntity,
                token: token
            };
        } catch (error) {
            throw CustomError.internalServer(`${error}`);
        }

    }

    public async loginUser(loginUserDto: LoginUserDto) {
        const user = await UserModel.findOne({ email: loginUserDto.email });

        if (!user) throw CustomError.badReques('Email already exist');

        const isMatching = bcryptAdapter.compare(loginUserDto.password, user.password);


        if (!isMatching) throw CustomError.badReques('Password is not valid')

        const { password, ...userEntity } = UserEntity.fromObject(user);

        const token = await JwtAdapter.generateToken({ id: user.id });

        if (!token) throw CustomError.internalServer('Error while creating JWT');

        return {
            user: userEntity,
            token: token
        }
    }
}