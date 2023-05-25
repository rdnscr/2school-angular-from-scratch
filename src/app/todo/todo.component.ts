import { Component } from '@angular/core';
import { TodoItem } from './todo.type';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
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
    { id: 3, checked: false, description: 'Todos anzeigen' },
    { id: 4, checked: false, description: 'Todos hinzufügen' },
    { id: 5, checked: false, description: 'Todos erledigen' },
  ];

  public onAdd(newTodo: TodoItem) {
    this.items.push(newTodo);
  }
}
