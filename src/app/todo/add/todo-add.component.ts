import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../todo.type';
import { FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: 'todo-add.component.html',
})
export class TodoAddComponent implements OnInit {
  @Input() currentMaxId: number;
  @Output() public added = new EventEmitter<TodoItem>();

  public newTodoForm = new FormGroup({
    description: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit() {}

  public onAdd(form: FormGroupDirective) {
    if (this.newTodoForm.valid && this.newTodoForm.dirty) {
      this.added.emit({
        id: this.currentMaxId + 1,
        description: this.newTodoForm.value.description,
        checked: false,
      });

      form.resetForm();
      this.newTodoForm.reset();
      this.newTodoForm.markAsUntouched();
    }
  }
}
