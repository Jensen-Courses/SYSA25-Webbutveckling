import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import productRouter from './routes/product-routes';

const PORT = process.env.PORT || 5010;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));