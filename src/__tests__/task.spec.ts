import StatusCodes from 'http-status-codes';
import request from 'supertest';
import app from '../api/app';
import mongoose from 'mongoose';
import { any } from 'joi';

beforeEach(async () => {
  await mongoose.connect('mongodb://localhost:27017/test');
});


afterEach(async () => {
  await mongoose.connection.close();
});

describe('To do list tests', () => {
  it(
    'Shouldn\'t be possible to create a task without \'description\'',
    async () => {
      const response = await request(app)
        .post('/task')
        .send({
          description: ''
        });

      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
      expect(response.body).toBe('"description" is not allowed to be empty');
    }
  );
  it(
    'Should be able to create a task ',
    async () => {
      const response = await request(app)
        .post('/task')
        .send({
          description: 'Comer macarrão'
        });

      expect(response.status).toBe(StatusCodes.CREATED);
      expect(response.body.description).toBe('Comer macarrão');
    }
  );
});
