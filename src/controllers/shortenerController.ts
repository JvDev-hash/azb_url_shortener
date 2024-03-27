import express, { Request, Response } from 'express';

export default class ShortenerController {

    static async testeApi(req: Request, res: Response) {
        
        return res.status(200).json({ message: 'tudo ok!' });
    }

}