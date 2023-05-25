import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './add/todo-add.component';
import { TodoRoutingModule } from './todo-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { TodosPipe } from './todos.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  declarations: [TodoComponent, TodosPipe, TodoAddComponent],
})
export class TodoModule {}
