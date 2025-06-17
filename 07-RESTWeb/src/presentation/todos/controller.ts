import { Request, Response } from "express";

const todos = [
    { id: 1, text: 'Buy milk', completedAt: new Date() },
    { id: 2, text: 'Buy bread', completedAt: null },
    { id: 3, text: 'Buy butter', completedAt: new Date() }
];

export class TodosController {

    constructor() { }

    public getTodos = (req: Request, res: Response): void => {
        res.json(todos);
    };

    public getTodosById = (req: Request, res: Response): void => {
        const id = +req.params.id;

        if (isNaN(id)) {
            res.status(400).json({ error: `Id argument is not a number` }); return;
        }

        const todo = todos.find(todo => todo.id === id);

        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ error: `Todo with id ${id} not found` });
        }
    };

    public createTodo = (req: Request, res: Response): void => {
        const { text } = req.body;

        if (!text) {
            res.status(400).json({ error: 'Text property is required' }); return;
        }

        const newTodo = {
            id: todos.length + 1,
            text,
            completedAt: null
        };

        todos.push(newTodo);
        res.json(newTodo);
    };

    public updateTodo = (req: Request, res: Response): void => {
        const id = +req.params.id;

        if (isNaN(id)) {
            res.status(400).json({ error: `Id argument is not a number` }); return;
        }

        const todo = todos.find(todo => todo.id === id);

        if (!todo) {
            res.status(404).json({ error: `Todo with id ${id} not found` }); return;
        }

        const { text, completedAt } = req.body;

        (completedAt === 'null') ? todo.completedAt = null : todo.completedAt = new Date(completedAt || todo.completedAt)

        todo.text = text || todo.text;
        res.json(todo);
    };

    public deleteTodo = (req: Request, res: Response): void => {
        const id = +req.params.id;
        const todo = todos.find(todo => todo.id === id);

        if (!todo) {
            res.status(404).json({ error: `Todo with id ${id} not found` });
            return;
        }
        todos.splice(todos.indexOf(todo), 1); //Elimina el todo

        res.json(todo);
    }
}
