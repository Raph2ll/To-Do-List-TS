import express from 'express';
import { create, list, findByDescription } from './useCases/task/taskController';
const route = express.Router({ mergeParams: true });

route.post('/task', create);
route.get('/task', list);
route.get('/task/:description', findByDescription);
export default route;