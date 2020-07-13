//SELECTOR PAGE - object che stanno in ascolto

//selettore permette di selezionare lo state senza interpellarlo direttamente
//utilizzo variabili observable per rimanere in ascolto dello state

import { TodoState } from './todos/todos.reducers';
import { UsersState } from './user/user.reducers';
import { createSelector } from '@ngrx/store';

//praticamente copia dello state dell'applicazione
export interface AppState {
    todoState: TodoState;
    usersState: UsersState;
}

//stato attuale che viene aggiornato in base al todo state, di tipo Appstate
//che rimane in ascolto sul vero state, e non sulla nostra copia AppState
export const selectTodosState = (state: AppState) => state.todoState;

//quando lo state cambia, automaticamente si cambia anche il selector perchè
//rimane in ascolto sui cambiamenti che avvengono dello state
export const selectTodos = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos
);

export const getTodoById = createSelector(
    selectTodosState,
    (state: TodoState, props: { id: number }) => state.todos.find(item => item.id === props.id)
);

export const getFirstTodo = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos.length > 0 ? state.todos[0] : null
);

export const selectUsersState = (state: AppState) => state.usersState;
export const getCurrentUser = createSelector(
    selectUsersState,
    (state: UsersState) => state.currentUser
) 