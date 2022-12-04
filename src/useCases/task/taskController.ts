import { Request, Response } from 'express';
import createTask from './taskService';

const create = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const response = await createTask(description);

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

export default create;