import { AppState } from '..';
import { createSelector } from '@ngrx/store';
import { UsersState } from './users.reducers';


export const selectUsersState = (state: AppState) => state.usersState;
export const getCurrentUser = createSelector(
    selectUsersState,
    (state: UsersState) => state.currentUser
);