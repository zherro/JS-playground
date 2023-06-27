import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { CreateTodoDto } from './dto/createTodo.dto';
import { TodosService } from './todos.service';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import Todo from './entity/todos.entity';
import { FilterDto } from './dto/filter.dto';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // get all todos
  @ApiOperation({ description: 'Get all todos' })
  @ApiOkResponse({
    description: 'The todos were successfully obtained.',
    type: [Todo],
  })
  @Get()
  getTodos(@Query() query: FilterDto) {
    return this.todosService.getAllTodos(query);
  }

  // get todo by id
  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return this.todosService.getTodoById(Number(id));
  }

  // create todo
  @Post()
  @ApiOperation({ description: 'Create a todo.' })
  @ApiCreatedResponse({
    description: 'The todo item has been successfully created.',
    type: Todo,
  })
  async createTodo(@Body() todo: CreateTodoDto, @Req() req): Promise<Todo> {
    return this.todosService.createTodo(req.body);
  }

  // update todo
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() todo: UpdateTodoDto, @Req() req) {
    return this.todosService.updateTodo(Number(id), req.body);
  }

  //delete todo
  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    this.todosService.deleteTodo(Number(id));
  }
}
