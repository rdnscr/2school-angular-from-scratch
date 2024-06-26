import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { TodoItem } from './todo.type';
import { TodosPipe } from './todos.pipe';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    CommonModule,
    TodosPipe,
  ],
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}

  get items(): TodoItem[] {
    return this.todoService.items;
  }

  public onAdd(newTodo: TodoItem) {
    this.items.push(newTodo);
  }
}
