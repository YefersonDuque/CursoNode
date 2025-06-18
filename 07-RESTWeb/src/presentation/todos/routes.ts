import { Router } from 'express';
import { TodosController } from './controller';

export class TodosRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodosController();

    // Rutas CRUD
    router.get('/', (req, res) => todoController.getTodos(req, res));
    router.get('/:id', (req, res) => todoController.getTodosById(req, res));
    // router.post('/', (req, res) => todoController.createTodo(req, res));
    // router.put('/:id', (req, res) => todoController.updateTodo(req, res));
    router.delete('/:id', (req, res) => todoController.deleteTodo(req, res));

    return router;
  }
}
