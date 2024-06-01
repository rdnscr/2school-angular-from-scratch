import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { TodoAddComponent } from './todo-add.component';
import { TodoItem } from './todo.type';
import { TodosPipe } from './todos.pipe';
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
  public items: Array<TodoItem> = [
    {
      id: 1,
      checked: false,
      description: 'Erste Angular Applikation erstellen',
    },
    { id: 2, checked: false, description: 'Todo Komponente erstellen' },
    { id: 3, checked: true, description: 'Todos anzeigen' },
    { id: 4, checked: true, description: 'Todos hinzufügen' },
    { id: 5, checked: false, description: 'Todos erledigen' },
  ];

  public onAdd(newTodo: TodoItem) {
    this.items.push(newTodo);
  }
}
