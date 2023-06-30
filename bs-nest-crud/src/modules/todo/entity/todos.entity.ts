import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos', { schema: 'public' })
class Todo {
  
  @ApiProperty({
    example: '000',
    description: 'todo unic id',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'my first todo item',
    description: 'todo title',
  })
  @Column({ nullable: true })
  title: string;

  @ApiProperty({
    example: 'my todo description',
    description: 'todo description',
  })
  @Column({ nullable: true })
  content: string;

  @ApiProperty({
    example: 'true',
    description: 'todo status',
  })
  @Column({ nullable: true })
  done: boolean;
}

export default Todo;
