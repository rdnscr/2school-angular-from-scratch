import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from './todo.type';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: 'todo-add.component.html',
})
export class TodoAddComponent {
  @Input({ required: true }) currentMaxId: number;
  @Output() public added = new EventEmitter<TodoItem>();

  public newTodoForm = new FormGroup({
    description: new FormControl(null, [Validators.required]),
  });

  public onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.added.emit({
        id: this.currentMaxId + 1,
        description: this.newTodoForm.value.description ?? '',
        checked: false,
      });
    }

    form.resetForm();
  }
}
