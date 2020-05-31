import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoAddComponent } from './add/todo-add.component';
import { TodoComponent } from './todo.component';
import { PendingChangesGuard } from './pending-changes.guard';

const todoRoutes = [
  { path: '', component: TodoComponent },
  { path: 'add', component: TodoAddComponent, canDeactivate: [PendingChangesGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}

