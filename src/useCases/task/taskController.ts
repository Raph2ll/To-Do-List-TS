import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { createTask, listTask } from './taskService';
import schema from '../../schemas/schemaTask';

const create = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;

    const { error } = schema.validate({ description });
    if (error) return res.status(StatusCodes.BAD_REQUEST).json(error.message);

    const response = await createTask(description);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    console.log(error);
  }
};

const list = async (req: Request, res: Response) => {
  try {
    const response = await listTask();
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.log(error);
  }
};

export { create, list };