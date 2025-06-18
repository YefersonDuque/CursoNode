import { Request, Response } from 'express';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import {
  CreateTodo,
  DeleteTodo,
  GetTodo,
  GetTodos,
  TodoRepository,
  UpdateTodo,
} from '../../domain';

export class TodosController {
  constructor(private readonly todoRepository: TodoRepository) {
    this.getTodos = this.getTodos.bind(this);
    this.getTodoById = this.getTodoById.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  public getTodos(req: Request, res: Response): void {
    new GetTodos(this.todoRepository)
      .execute()
      .then((todos) => res.json(todos))
      .catch((error) => res.status(400).json({ error }));
  }

  public getTodoById(req: Request, res: Response): void {
    const id = +req.params.id;

    new GetTodo(this.todoRepository)
      .execute(id)
      .then((todo) => res.json(todo))
      .catch((error) => res.status(400).json({ error }));
  }

  public createTodo(req: Request, res: Response): void {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error) {
      res.status(400).json({ error });
      return;
    }

    new CreateTodo(this.todoRepository)
      .execute(createTodoDto!)
      .then((todo) => res.json(todo))
      .catch((error) => res.status(400).json({ error }));
  }

  public updateTodo(req: Request, res: Response): void {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
    if (error) {
      res.status(400).json({ error });
      return;
    }

    new UpdateTodo(this.todoRepository)
      .execute(updateTodoDto!)
      .then((todo) => res.json(todo))
      .catch((error) => res.status(400).json({ error }));
  }

  public deleteTodo(req: Request, res: Response): void {
    const id = +req.params.id;

    new DeleteTodo(this.todoRepository)
      .execute(id)
      .then((todo) => res.json(todo))
      .catch((error) => res.status(400).json({ error }));
  }
}