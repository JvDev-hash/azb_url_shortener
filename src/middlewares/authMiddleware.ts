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


        //if(!bcrypt.compareSync(token, process.env.APIKEY)) return res.status(401).json({ auth: false, message: 'Token provided not authorized' }); 

        return res.status(200).json(getUser);
    } catch(error: any){
        return res.status(500).json(error.message);
    }

}