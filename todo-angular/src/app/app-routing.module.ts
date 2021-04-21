import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'todolist', component: TodolistComponent},
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
  { path: 'todo/:id', component: TodoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
