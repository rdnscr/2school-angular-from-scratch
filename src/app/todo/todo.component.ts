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

  public newTodoForm = new FormGroup({
    description: new FormControl(null, [Validators.required]),
  });

  public onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.items.push({
        id: this.items.length + 1,
        description: this.newTodoForm.value.description ?? '',
        checked: false,
      });
      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  }
}
