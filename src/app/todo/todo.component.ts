import { Component } from '@angular/core';
import { TodoItem } from './todo.type';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { TodosPipe } from './todos.pipe';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatCheckboxModule, FormsModule, CommonModule, TodosPipe],
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
}
