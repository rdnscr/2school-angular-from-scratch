import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { TodoAddComponent } from './add/todo-add.component';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const pendingChangesGuard: CanDeactivateFn<TodoAddComponent> = (
  component: TodoAddComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
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
