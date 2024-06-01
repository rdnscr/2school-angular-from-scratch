import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { TodoAddComponent } from './todo-add.component';
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
    TodoAddComponent,
  ],
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  public items: Array<TodoItem> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.load().subscribe((todos) => {
      this.items = todos;
    });
  }

  public onAdd(newTodo: TodoItem) {
    this.items.push(newTodo);
  }
}
