import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TodosServerService } from './services/todos-server.service';
import { HttpCommunicationsService } from './http-communication/http-communication.service';

@NgModule({
  declarations: [],
  providers: [HttpCommunicationsService, TodosServerService],
  imports: [HttpClientModule]
})
export class CoreModule { }
