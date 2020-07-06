import { createAction, props } from '@ngrx/store';

export const login = 
createAction('[Login] login', props<{username: string, password: string}>())