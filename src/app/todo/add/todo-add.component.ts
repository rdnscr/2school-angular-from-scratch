import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../todo.type';
import { FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: 'todo-add.component.html',
})
export class TodoAddComponent implements OnInit {
  public newTodoForm = new FormGroup({
    description: new FormControl(null, [Validators.required]),
  });

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  public onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.todoService.add(this.newTodoForm.value.description);

      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  }
}
