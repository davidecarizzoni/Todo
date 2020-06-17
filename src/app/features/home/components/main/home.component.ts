import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from 'src/app/core/model/user.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showHideDemo = false;
  demoTitle: string;
  userForm: FormGroup;

  user: User = {
    name: '',
    surname: ''
  }

  list: User[]= [
    {name: 'Luca', surname: 'Alicata'},
    {name: 'Thomas', surname: 'Rossi'},
    {name: 'Amanpreet', surname: 'Singh'},
  ];

  constructor(private fb: FormBuilder) { 
    this.userForm = this.fb.group({
      name: 'nome',
      surname: 'sdfdsf'
    })
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit HOME');
  }

  ngOnInit(): void {
    console.log('ngOnInit HOME');
  }

  trackList(index, item){
    return index+item.name+item.surname;
  }

  removeItem(index){
    this.list.splice(index, 1);
  }

  addItem(){
    this.list.push(this.userForm.value)
    this.user.name= this.userForm.get('name').value;
    this.user.surname= this.userForm.get('surname').value;
    // this.user = this.userForm.value;
  }

}
