import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo.type';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
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

