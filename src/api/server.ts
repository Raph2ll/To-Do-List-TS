import express from 'express';
import mongoose from 'mongoose';
import router from '../router';
import cors from 'cors';

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    const PORT = process.env.PORT || 3000;

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use('/', router);
    app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`));
  }).catch((error) => {
    console.log(error);
  });
