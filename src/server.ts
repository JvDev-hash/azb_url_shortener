import express from 'express'
import routes from './routes'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 65000;

routes(app);


app.listen(port, () => console.log(`Server running on port: ${port}`));

export default app