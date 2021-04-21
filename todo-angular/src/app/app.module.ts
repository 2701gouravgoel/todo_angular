import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserData } from './mock-todos';
import { TodolistComponent } from './todolist/todolist.component';
import { RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoDetailsComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule, InMemoryWebApiModule.forRoot(UserData),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
