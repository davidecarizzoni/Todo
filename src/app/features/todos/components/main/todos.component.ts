import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TodosFacadeService } from '../../services/todos-facade.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo.interface';
import { selectTodos } from 'src/app/redux/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  viewed: boolean = false;

  get todosList(): Observable<Todo[]> {
    return this.store.pipe(select(selectTodos));
  }

  constructor(private todosFacadeService: TodosFacadeService, private store: Store) { }

  ngOnInit(): void {
    this.todosFacadeService.initTodo();
  }

  showDetail(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
    this.viewed = !this.viewed;
    console.log(this.viewed);
  }

  removeTodo(todo: Todo){
    this.todosFacadeService.removeTodo(todo.id);
  }

}