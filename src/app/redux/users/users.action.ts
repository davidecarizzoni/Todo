import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/model/user.interface';

export const saveCurrentUser = 
createAction('[Users] save current', props<{user: User}>())