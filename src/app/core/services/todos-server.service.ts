import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.interface';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { HttpCommunicationsService } from '../http-communication/http-communication.service';

@Injectable()
export class TodosServerService {

  constructor(private httpCommunications: HttpCommunicationsService) { }

  retrieveAllTodos(): Observable<Todo[]>{
    return this.httpCommunications.retrieveGetCall<Todo[]>("todos");
  }

  retrieveTodoById(id: number): Observable<Todo>{
    return this.httpCommunications.retrieveGetCall<Todo>("todos/"+id);
  }

  updateTodo(todo: Todo): Observable<Todo>{
    return this.httpCommunications.retrievePutCall("todos/"+todo.id, todo);
  }

  addTodo(todo: Todo): Observable<Todo>{
    return this.httpCommunications.retrievePostCall("todos/", todo)
  }

  removeTodoById(id: number){
    return this.httpCommunications.retrieveDeleteCall("todos/" + id)
  }
}
