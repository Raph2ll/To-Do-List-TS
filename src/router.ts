import express from 'express';
import { create, list } from './useCases/task/taskController';
const route = express.Router({ mergeParams: true });

route.post('/task', create);
route.get('/task', list);

export default route;