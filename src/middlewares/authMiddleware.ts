import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import User from "../models/User";
import database from "../database";

export default async function authMiddleware(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization;
    if (!token) return res.status(400).json({ auth: false, message: 'No token provided.' });
    try{

        let getUser: any = await User.findOne({
            where: {
                key: `${token}`
            }
        })

        if(!getUser || !bcrypt.compareSync(token, getUser.hashKey)) return res.status(401).json({ auth: false, message: 'Token provided not authorized' }); 

        next();
    } catch(error: any){
        return res.status(500).json(error.message);
    }

}