import mongoose from 'mongoose';
import app from './app';


mongoose
  .connect('mongodb://localhost:27017/test')
  .then(() => {
    const PORT = process.env.PORT || 3000;


    app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`));
  }).catch((error) => {
    console.log(error);
  });