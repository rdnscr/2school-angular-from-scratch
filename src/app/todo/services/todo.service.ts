import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap } from 'rxjs/operators';
import { TodoItem } from '../todo.type';

@Injectable({ providedIn: 'root' })
export class TodoService {
  public items: Array<TodoItem> = [];

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {
    this.load();
  }

  public add(description: string) {
    this.items.push({
      id: this.items.length + 1,
      description,
      checked: false,
    });
  }

  private load() {
    this.http
      .get<TodoItem[]>('assets/todos.json')
      .pipe(
        tap(() =>
          this.snackbar.open('todos successfully loaded', null, {
            duration: 2000,
          })
        ),
        catchError((e) => {
          this.snackbar.open('could not load todos', 'Ok');
          return [];
        })
      )
      .subscribe((todos) => {
        this.items = todos;
      });
  }
}
