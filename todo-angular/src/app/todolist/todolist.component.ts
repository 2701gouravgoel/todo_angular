import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Todo} from '../todo'
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [];
  todo: any;
  constructor(private todoService: TodoService,private router: Router) { }

  edit = false;
  editid = -1;
  ngOnInit(){
    console.log(1);
    this.getlist();
  }
  @ViewChild("des") des: any;
  goToEdit(id:any): void {
    this.idtoUpdate = id;
    this.updateUser();
  }
  goToDelete(id:any): void {
    this.idtodelete = id;
    this.deleteUser();
  }
  getlist(): void{
    this.todoService.getlist()
    .subscribe(list => this.todos =list);
    console.log(1);
    console.log(this.todos);
  }

  idtoUpdate = 1;
  description="";
  updateUser() {
    this.todoService.getTodo(this.idtoUpdate).subscribe(data => {
      this.todo = data;
      this.todo.description = this.des.nativeElement.value;
      this.todoService.updateTodo(this.todo).subscribe(data1 => {
        this.getlist();
      });
    });
  }
  idtodelete=1;
  deleteUser() {
    this.todoService.deleteTodo(this.idtodelete).subscribe(data => {
       this.getlist();
    });
  }
}
