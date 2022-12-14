import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import POSTGRES_CLIENT from './config/database';
//routes
import {categoryRoute} from './routes/category.route'; 
import {productRoute} from './routes/product.route'; 
import {authRoute} from './routes/auth.route';
import { orderRoute } from './routes/order.routes';

export const app: express.Application = express();
const address = '0.0.0.0:3000';

app.use(bodyParser.json());

app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/auth', authRoute);
app.use('/order', orderRoute);

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!');
});

// app.listen(3000, function () {
//     console.log('DB::', POSTGRES_CLIENT)
//      console.log(`starting app on: ${address}`)
// })

POSTGRES_CLIENT.connect().then((db: any) => {
    app.listen(3000, function () {
        console.log(`starting app on: ${address}`);
    });
    
});
