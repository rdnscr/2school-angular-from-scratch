import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoAddComponent } from './add/todo-add.component';
import { TodoComponent } from './todo.component';

const todoRoutes = [
  { path: '', component: TodoComponent },
  { path: 'add', component: TodoAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}

