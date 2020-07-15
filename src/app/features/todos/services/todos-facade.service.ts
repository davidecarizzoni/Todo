import { Injectable } from '@angular/core';
import { TodosServerService } from 'src/app/core/services/todos-server.service';
import { Store } from '@ngrx/store';
import { insertTodo, editTodo, initTodos, postTodo, updateTodo, retrieveAllTodos, deleteTodo} from 'src/app/redux/todos/todos.actions';
import { Router } from '@angular/router';
import { Todo } from 'src/app/core/model/todo.interface';


@Injectable()
export class TodosFacadeService {

  constructor(private todosServerService: TodosServerService, private router: Router,
    private store: Store) { }

  // editTodo(todo: Todo) {
  //   this.todosServerService.updateTodo(todo).subscribe((item: Todo) => {
  //     this.store.dispatch(editTodo({todo: item}));
  //     this.goToDetail(todo.id);
  //   });
  // }

  // addTodo(todo: Todo) {
  //   this.todosServerService.addTodo(todo).subscribe((item: Todo) => {
  //     this.store.dispatch(insertTodo({todo: item}));
  //     this.goToTodosHome();
  //   });
  // }

  // initTodo(){
  //   this.todosServerService.retrieveAllTodos().subscribe((todos: Todo[])=>{
  //     this.store.dispatch(initTodos({todos}));
  //   });
  // }

  // removeTodo(id: number){
  //   this.todosServerService.removeTodoById(id).subscribe((any) => {
  //     this.initTodo();
  //   });
  // }

  addTodo(todo: Todo) {
    this.store.dispatch(postTodo({todo}))
  }

  updateTodo(todo: Todo) {
    this.store.dispatch(updateTodo({todo}))
  }

  removeTodo(todo: Todo){
    this.store.dispatch(deleteTodo({todo}));
    this.store.dispatch(retrieveAllTodos());
  }

  initTodo(){
    this.store.dispatch(retrieveAllTodos());
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