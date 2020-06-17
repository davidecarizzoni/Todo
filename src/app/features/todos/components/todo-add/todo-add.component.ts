import { TodosFacadeService } from './../../services/todos-facade.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/app/core/model/todo.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  get todo(): Observable<Todo> {
    return this.todosFacadeService.todoSelected$;
  }

  constructor(private todosFacadeService: TodosFacadeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params != null && params['id'] != null){
        this.todosFacadeService.getTodoById(params['id']);
      }
    });
  }

  addForm(todo: Todo) {
    this.todosFacadeService.addTodo(todo);
    this.todosFacadeService.goToAll();
  }
 
  undo(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
  }
}
