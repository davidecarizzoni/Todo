import { TodoStep } from './todo-step.interface';

export interface Todo {
    id: number;
    title: string;
    deadline: Date; //data di scadenza
    description: string;
    // steps: TodoStep[];
}