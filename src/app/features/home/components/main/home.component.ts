import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from 'src/app/core/model/user.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Todo } from 'src/app/core/model/todo.interface';
import { getFirstTodo, getCurrentUser } from 'src/app/redux';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private store:Store){}

  get todo(): Observable<Todo> {
    return this.store.pipe(select(getFirstTodo));
  }

  get user(): Observable<string> {
    return this.store.pipe(
      select(getCurrentUser),
      filter(user => !!user),
      map(user => user.name)
    );
  }
  
  ngOnInit(): void {}

  

}
