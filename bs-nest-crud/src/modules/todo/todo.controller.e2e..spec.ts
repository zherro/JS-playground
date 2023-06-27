import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TodosModule } from './todos.module';
import { TodosService } from './todos.service';

describe('Cats', () => {
  let app: INestApplication;
  let todoService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TodosModule],
    })
      .overrideProvider(TodosService)
      .useValue(todoService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(app.getHttpServer())
      .get('/api/v1/todos')
      .expect(200)
      .expect({
        data: todoService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});