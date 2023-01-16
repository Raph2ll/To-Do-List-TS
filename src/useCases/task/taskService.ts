import { Task } from '../../model/Task';

const createTask = async (description: string) => {
  const newTask = await Task.create({ description });
  return newTask;
};

const listTask = async () => {
  const response = await Task.find();
  return response;
};

const findTaskDescription = async (description: string) => {
  const response = await Task.find({ description });
  return response;
};

export { createTask, listTask, findTaskDescription };