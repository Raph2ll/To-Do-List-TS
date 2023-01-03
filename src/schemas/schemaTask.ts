import Joi from 'joi';

const schemaTask = Joi.object({
  updatedAt: Joi.date(),
  description: Joi.string().required().not()
    .empty(),
  completed: Joi.boolean(),
}).messages({
  'any.empty': '{#label} is not allowed',
});

export default schemaTask;