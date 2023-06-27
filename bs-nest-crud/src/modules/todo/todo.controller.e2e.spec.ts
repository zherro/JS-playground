import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import Todo from './entity/todos.entity';
import { Connection, DataSource, Repository } from 'typeorm';
import { DataType, newDb } from 'pg-mem';
import { AppModule } from '../../../src/app.module';
import { TodosModule } from './todos.module';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const setupDataSource = async () => {
  const db = await newDb({
    autoCreateForeignKeyIndices: true,
  });

  // db.public.registerFunction({
  //   implementation: () => 'test',
  //   name: 'current_database',
  // });

  // Register current_database function
  db.public.registerFunction({
    name: 'current_database',
    args: [],
    returns: DataType.text,
    implementation: () => 'test'
  });

  db.public.registerFunction({
    name: 'version',
    args: [],
    returns: DataType.text,
    implementation: () => 'test'
  });

  db.public.registerFunction({
    name: 'jsonb_typeof',
    args: [DataType.jsonb],
    returns: DataType.text,
    implementation: x => (x ? x.constructor.name : null),
  });

  db.public.interceptQueries(queryText => {
    if (queryText.search(/(pg_views|pg_matviews|pg_tables|pg_enum)/g) > -1) {
      return [];
    }
    return null;
  });

  const ds: DataSource = await db.adapters.createTypeormDataSource({
    type: 'postgres',
    entities: [Todo]
  });
  await ds.initialize();
  await ds.synchronize();

  return {ds, db};
};

describe('TodosController (e2e)', () => {
  let app: INestApplication;
  let dataSource: any;
  let queryRunner: any;

  let repository: Repository<Todo>;


  beforeEach(async () => {

    let {ds, db} = await setupDataSource();
    dataSource = ds;

    const module = await Test.createTestingModule({
      // imports: [TypeOrmModule.forFeature([Todo])],
      
      imports: [AppModule],
      // controllers: [TodosController],
      // providers: [TodosService],
    })
      .overrideProvider(Connection)
      .useValue(ds)
      .compile();

    app = module.createNestApplication();
    await app.init();

    repository = dataSource?.getRepository(Todo);

    await repository.query('CREATE TABLE IF NOT EXISTS todos (id integer, title varchar, content varchar, done boolean)');
  });

  afterEach(async () => {
    await repository.query('TRUNCATE ID EXISTS todos;');
  });

  it('/ (GET) records', async () => {
    await repository.query("INSERT INTO todos(id, title) values(111, 'my todo')");

    return request(app.getHttpServer())
      .get('/todos')
      .expect(200)
      .expect((response: Response) => {
        expect(response.body).toHaveLength(1);
        expect(response.body).toEqual([
          {
            id: 111,
            title: 'my todo',
            content: null,
            done: false
          },
        ]);
      });
  });

  afterAll(async () => {
    await app?.close();
  });
});