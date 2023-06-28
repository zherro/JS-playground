import { Test } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

describe('TodosController', () => {
  let todoController: TodosController;
  let todoService: TodosService;

  beforeEach(() => {
    todoService = new TodosService(undefined);
    todoController = new TodosController(todoService);
  });

  describe('getTodos', () => {
    it('should return an array of todos', async () => {
      const result: any = ['test'];
      jest.spyOn(todoService, 'getAllTodos').mockImplementation(() => result);

      expect(await todoController.getTodos({})).toBe(result);
    });
  });
});

// describe('TodosController', () => {
//   let todoController: TodosController;
//   let todoService: TodosService;

//   beforeEach(async () => {
//     const moduleRef = await Test.createTestingModule({
//       controllers: [TodosController],
//       providers: [TodosService],
//     }).compile();

//     todoService = moduleRef.get<TodosService>(TodosService);
//     todoController = moduleRef.get<TodosController>(TodosController);
//   });

//   describe('getTodos', () => {
//     it('should return an array of todos', async () => {
//       const result: any = ['test'];
//       jest.spyOn(todoService, 'getAllTodos').mockImplementation(() => result);

//       expect(await todoController.getTodos({})).toBe(result);
//     });
//   });
// });
