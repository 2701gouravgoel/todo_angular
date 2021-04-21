import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {} from './mock-todos'
import { tap, catchError, map } from 'rxjs/operators';
import { Todo } from './todo';
import {of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiurl = 'api/users';  // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  x=10
  constructor(private http: HttpClient) { } //Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error);   //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getlist(): Observable<Todo[]> {
    console.log(2)
    return this.http.get<Todo[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getTodo (id: number): Observable<Todo> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Todo>(url).pipe(
    catchError(this.handleError)
    );
  }
  addTodo (todo: Todo): Observable<Todo> { 
    todo.id=this.x;
    this.x++;
    return this.http.post<Todo>(this.apiurl, todo, this.httpOptions).pipe(
    tap(data => console.log(data)),
    catchError(this.handleError)
  );
  }
  updateTodo(todo: Todo): Observable<Todo>{
    const url = `${this.apiurl}/${todo.id}`;
    return this.http.put<Todo>(this.apiurl, todo, this.httpOptions).pipe(
      map(() => todo),
      catchError(this.handleError)
    );
  }
  deleteTodo (id: number): Observable<Todo> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete<Todo>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
