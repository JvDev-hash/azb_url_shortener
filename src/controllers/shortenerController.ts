import express, { Request, Response, NextFunction } from 'express';
import { generateString } from '../helper/stringHelper';
import Url from '../models/Url';
import moment from 'moment';
import path from 'path';

require('dotenv').config();
export default class ShortenerController {

  static async shortenUrl(req: Request, res: Response, next: NextFunction) {
    try{   
      const longUrl = req.body.longUrl;
      const shortUrl = await generateString(8);
      const expDate = moment().subtract(3, 'hours').add(15, 'days');

      let getUser: Url = await Url.create({
        shortened_uri: shortUrl,
        original_url: longUrl,
        expiration_date: expDate
      });

      if(getUser) return res.status(201).json({ shortUrl: process.env.DOMAIN+shortUrl });
      } catch (error: any) {
        return res.status(500).json({message: error.message});
      }
  }

  static async popUrl(req: Request, res: Response, next: NextFunction) {
    try{
      const shortUrl = req.params.shortUrl;

      const fullUrl: any = await Url.findOne({
        where: {
            shortened_uri: `${shortUrl}`
        }
      });

      const today = moment().subtract(3, 'hours');

      if(fullUrl && today.isBefore(fullUrl.expiration_date)) return res.writeHead(301, { Location: fullUrl.original_url }).end();

      return res.sendStatus(404);

    } catch (error: any) {
      return res.status(500).json({message: 'Ocorreu um problema: ' + error.message});
    }
  }

}