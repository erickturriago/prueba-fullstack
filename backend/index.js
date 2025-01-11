import express from 'express';
import userRoutes from './app/routes/userRoutes.js';
import cors from 'cors';
import { config } from 'dotenv';

const app = express();
app.use(cors());

config()

app.use('/api/users', userRoutes);

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});