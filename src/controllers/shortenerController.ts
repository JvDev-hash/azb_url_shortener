import express, { Request, Response, NextFunction } from 'express';

export default class ShortenerController {

  static async shortenUrl(req: Request, res: Response, next: NextFunction) {
    try{
        
      //console.log(req.body.longUrl);

      next();
  
      } catch (error: any) {
        return res.status(500).json({message: 'Ocorreu um problema ' + error.message});
      }
  }

  static async popUrl(req: Request, res: Response, next: NextFunction) {
    try{

      

      next();

    } catch (error: any) {
      return res.status(500).json({message: 'Ocorreu um problema ' + error.message});
    }
  }

}