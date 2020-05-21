import { PipeTransform, Pipe } from '@angular/core';
import { TodoItem } from './todo.type';

@Pipe({name: 'todos', pure: false})
export class TodosPipe implements PipeTransform {
  transform(value: TodoItem[], done: boolean) {
    return value?.length ? value.filter(item => item.checked === done) : value;
  }
}
