import { Route } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './add/todo-add.component';

export default [
  {
    path: '',
    children: [
      { path: '', component: TodoComponent },
      { path: 'add', component: TodoAddComponent },
    ],
  },
] satisfies Route[];
