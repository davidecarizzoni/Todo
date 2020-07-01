import { Injectable } from '@angular/core';
import { TodosServerService } from 'src/app/core/services/todos-server.service';
import { Store } from '@ngrx/store';
import { addTodo, editTodo, initTodos} from 'src/app/redux/todos/todos.actions';
import { Router } from '@angular/router';
import { Todo } from 'src/app/core/model/todo.interface';


@Injectable()
export class TodosFacadeService {

  constructor(private todosServerService: TodosServerService, private router: Router,
    private store: Store) { }

  editTodo(todo: Todo) {
    this.todosServerService.updateTodo(todo).subscribe((item: Todo) => {
      this.store.dispatch(editTodo({todo: item}));
      this.goToDetail(todo.id);
    });
  }

  addTodo(todo: Todo) {
    this.todosServerService.addTodo(todo).subscribe((item: Todo) => {
      this.store.dispatch(addTodo({todo: item}));
      this.goToTodosHome();
    });
  }

  initTodo(){
    this.todosServerService.retrieveAllTodos().subscribe((todos: Todo[])=>{
      this.store.dispatch(initTodos({todos}));
    });
  }

  removeTodo(id: number){
    this.todosServerService.removeTodoById(id).subscribe((any) => {
      this.initTodo();
    });
    
  }

  goToTodosHome() {
    this.router.navigateByUrl('/todos');
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/todos/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/todos/edit/' + id);
  }

  goToHome(){
    this.router.navigateByUrl('/todos');
  }


}