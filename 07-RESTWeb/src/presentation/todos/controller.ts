import { Request, Response } from "express"

const todos = [
    { id: 1, text: 'Buy milk', createAt: new Date() },
    { id: 2, text: 'Buy bread', createAt: null },
    { id: 3, text: 'Buy butter', createAt: new Date() }
];

export class TodosController {

    //*Dependencias Inyectadas
    constructor() { }

    public getTodos = (req: Request, res: Response) => {
        return res.json(todos);
    };

    public getTodosById = (req: Request, res: Response) => {

        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error: `Id argument is not a number`})
        const todo = todos.find(todo => todo.id === id);

        (todo)
            ? res.json(todo)
            : res.status(404).json({ error: `Todo with id ${id} not found` });
    };

    public createTodo = (req: Request, res: Response) => {
        const body = req.body;
        res.json(body)
    };
}
