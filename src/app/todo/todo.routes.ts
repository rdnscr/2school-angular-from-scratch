import { Route } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './add/todo-add.component';
import { pendingChangesGuard } from './pending-changes.guard';

export default [
  {
    path: '',
    children: [
      { path: '', component: TodoComponent },
      { path: 'add', component: TodoAddComponent, canDeactivate: [pendingChangesGuard] },
    ],
  },
] satisfies Route[];
