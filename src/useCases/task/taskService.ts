import { Task } from '../../model/Task';

const createTask = async (description: string) => {
  const newTask = await Task.create({ description });
  return newTask;
};

const listTask = async () => {
  const response = await Task.find();
  return response;
};

export { createTask, listTask };