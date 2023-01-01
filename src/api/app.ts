import router from '../router';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', router);

export default app;