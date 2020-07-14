import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveAllTodos, initTodos, updateTodo, editTodo } from './todos.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { Todo } from 'src/app/core/model/todo.interface';
import { goToDetail } from 'src/app/features/todos/redux/todos-navigation.actions';
import { HttpCommunicationsService } from 'src/app/core/http-communication/http-communication.service';

@Injectable()
export class TodosEffects {

    retrieveAllTodos$ = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllTodos),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Todo[]>("todos").pipe(
            map(todos => initTodos({ todos }))
        ))
    ));

    updateTodo$ = createEffect(() => this.actions$.pipe(
        ofType(updateTodo),
        switchMap(action => this.httpCommunicationsService.retrievePutCall<Todo>("todos/" + action.todo.id, action.todo).pipe(
            switchMap(todo => {
                return [editTodo({ todo }), goToDetail({id: todo.id})];
            })
        ))
    ));


    constructor(private actions$: Actions,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}