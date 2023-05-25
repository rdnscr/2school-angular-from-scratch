import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { NgModule } from '@angular/core';
import { TodoAddComponent } from './add/todo-add.component';
import { pendingChangesGuard } from './pending-changes.guard';

const todoRoutes = [
  { path: '', component: TodoComponent },
  {
    path: 'add',
    component: TodoAddComponent,
    canDeactivate: [pendingChangesGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
