import express from 'express';
import create from './useCases/task/taskController';
const route = express.Router({ mergeParams: true });

route.post('/task', create);


export default route;