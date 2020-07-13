//POSSIBILITA' DI CREARE UNICO STATE - LOGIN E TODO

import { createReducer, on, Action } from '@ngrx/store'
import { User } from 'src/app/core/model/user.interface';
import { saveCurrentUser } from './users.action';


// export interface TodoState {
//     todos: Todo[];
//     executed: boolean;

// }

// export const initialState: TodoState = {
//     todos: [],
//     executed: false
// };

export interface UsersState {
    currentUser: User;
}

export const initialState: UsersState = {
    currentUser: null
}

const usersReducers = createReducer(
    initialState,
    on(saveCurrentUser, (state, {user}) => 
    ({...state, currentUser: user}))
);

export function usersReducer(state: UsersState | undefined, action: Action){
    return usersReducers(state, action);
}