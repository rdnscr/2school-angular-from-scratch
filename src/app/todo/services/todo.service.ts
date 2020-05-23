import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { TodoItem } from '../todo.type';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  public load(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('assets/todos.json').pipe(
      tap(() => this.snackbar.open('todos successfully loaded', null, {duration: 2000})),
      catchError((e) => {
        this.snackbar.open('could not load todos', 'Ok');
        return [];
      })
    );
  }
}
