import { UsersState, usersReducer } from './users/users.reducers';
import { TodoState, todosReducer } from './todos/todos.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    todoState: TodoState;
    usersState: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
    todoState: todosReducer,
    usersState: usersReducer
};