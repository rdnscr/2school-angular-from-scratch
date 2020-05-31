import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { TodoItem } from './todo.type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}

  get items(): TodoItem[] {
    return this.todoService.items;
  }
}
