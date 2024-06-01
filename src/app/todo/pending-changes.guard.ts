import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { TodoAddComponent } from './add/todo-add.component';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const pendingChangesGuard: CanDeactivateFn<TodoAddComponent> = (
  component: TodoAddComponent
) => {
  if (component.newTodoForm.dirty) {
    inject(MatSnackBar).open(
      'Änderungen müssen zuerst gespeichert werden',
      undefined,
      {
        duration: 2000,
      }
    );
  }
  return !component.newTodoForm.dirty;
};
