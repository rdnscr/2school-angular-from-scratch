import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../todo/todo.type';
import { Observable, catchError, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class TodoService {
  public items: Array<TodoItem> = [];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {
    this.load().subscribe(loaded => this.items = loaded);
  }

  public load(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('assets/todos.json').pipe(
      tap(() =>
        this.snackbar.open('todos successfully loaded', undefined, {
          duration: 2000,
        })
      ),
      catchError((e) => {
        this.snackbar.open('could not load todos', 'Ok');
        return [];
      })
    );
  }

  public add(description: string) {
    this.items.push({
      id: this.items.length + 1,
      description,
      checked: false,
    });
  }
}
