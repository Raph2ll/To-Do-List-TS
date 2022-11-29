import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    const app = express();
    const PORT = process.env.PORT || 3000;


    app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`));
  }).catch((error) => {
    console.log(error);
  });
