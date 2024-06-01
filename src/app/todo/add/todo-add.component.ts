import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../todo.type';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: 'todo-add.component.html',
})
export class TodoAddComponent {
  constructor (private todoService: TodoService){}

  public newTodoForm = new FormGroup({
    description: new FormControl(null, [Validators.required]),
  });

  public onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.todoService.add(this.newTodoForm.value.description ?? '');
      form.resetForm();
    }
  }
}
