import { Task } from '../../model/Task';

const createTask = async (description: string) => {
  const newTask = await Task.create({ description });
  return newTask;
};

export default createTask;