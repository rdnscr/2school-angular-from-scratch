import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: 'todo-add.component.html',
})
export class TodoAddComponent {
  public newTodoForm = new UntypedFormGroup({
    description: new UntypedFormControl(null, [Validators.required]),
  });

  constructor(private todoService: TodoService) {}

  public onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.todoService.add(this.newTodoForm.value.description);

      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  }
}
