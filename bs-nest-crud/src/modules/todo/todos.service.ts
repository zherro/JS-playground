import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/createTodo.dto';
import Todo from './entity/todos.entity';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {}

  // find all
  async getAllTodos(query: FilterDto) {
    // return this.todoRepository.find();

    console.log(query);

    const take = query.size || 10;
    const skip = query.page || 0;
    const keyword = query.filter || '';

    const result = await this.todoRepository.findAndCount({
      where: query.filter ? { title: Like('%' + keyword + '%') } : {},
      order: { id: 'DESC' },
      take: take,
      skip: skip,
    });

    return {
      content: result[0],
      pagination: {
        page: query.page,
        size: 10,
        total: result[1],
        totalPages: +(''+result[1]/10).split('.')[0] +  +((''+result[1]/10).indexOf('.') >= 0 ? 1 : 0),
      },
    }
  }

  // find by id
  async getTodoById(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (todo) {
      return todo;
    }

    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createTodo(todo: CreateTodoDto) {
    const newTodo = await this.todoRepository.create(todo);
    console.log(todo);
    await this.todoRepository.save(newTodo);

    return newTodo;
  }

  // update
  async updateTodo(id: number, post: UpdateTodoDto) {
    await this.todoRepository.update(id, post);
    const updatedTodo = await this.todoRepository.findOne({ where: { id } });
    if (updatedTodo) {
      return updatedTodo;
    }

    throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteTodo(id: number) {
    const deletedTodo = await this.todoRepository.delete(id);
  }
}
