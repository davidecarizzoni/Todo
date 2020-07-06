//POSSIBILITA' DI CREARE UNICO STATE - LOGIN E TODO

import { createReducer, on, Action } from '@ngrx/store'
import { login } from './login.actions'

// export interface TodoState {
//     todos: Todo[];
//     executed: boolean;

// }

// export const initialState: TodoState = {
//     todos: [],
//     executed: false
// };

export interface LoginState {
    username: string;
    password: string;
    executed: boolean;
}

export const initialState: LoginState = {
    username: "",
    password: "",
    executed: false
}

const loginReducers = createReducer(
    initialState,
    on(login, (state, {username, password}) => 
    ({...state, username: username, password: password}))
);

export function reducer(state: LoginState | undefined, action: Action){
    return loginReducers(state, action);
}