import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { createTask, listTask, findTaskDescription } from './taskService';
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

const findByDescription = async (req: Request, res: Response) => {
  try {
    const { description } = req.params;

    const response = await findTaskDescription(description);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.log(error);
  }
};

export { create, list, findByDescription };