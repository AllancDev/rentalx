import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Bearer token
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    // Bearer 6656565566565
    const [, token] = authHeader.split(" ");

    try {
        const { sub: users_id } = verify(
            token,
            "468ecf8ff1a4090ad5394359b35da1cb"
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = usersRepository.findById(users_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
