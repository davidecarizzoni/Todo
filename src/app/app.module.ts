import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/todos/todos.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({ todoState: reducer })
    //dichiariamo lo state del progetto, che noi vogliamo mantenere aggiornato
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
