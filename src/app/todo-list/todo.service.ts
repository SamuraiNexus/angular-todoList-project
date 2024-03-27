import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService{

  constructor(private http: HttpClient) { }

  getToDo() : Observable<Todo[]> {
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  }

  getById(id:number) : Observable<Todo> {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }


}
