import bodyParser from 'body-parser';
import shortener from './shortenerRoutes'
import cors from 'cors';

export default (app: any) => {
    app.use(cors())
    app.use(bodyParser.json())

    app.use(shortener)

}