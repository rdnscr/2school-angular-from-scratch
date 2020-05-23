import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../todo.type';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  public load(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('assets/todos.json');
  }
}
