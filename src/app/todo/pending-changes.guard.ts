import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TodoAddComponent } from './add/todo-add.component';
import { MatSnackBar } from '@angular/material/snack-bar';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({ providedIn: 'root' })
export class PendingChangesGuard implements CanDeactivate<TodoAddComponent> {
  constructor(private snackbar: MatSnackBar) {}

  canDeactivate(
    component: TodoAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.newTodoForm.dirty) {
      this.snackbar.open('Änderungen müssen zuerst gespeichert werden', null, {
        duration: 2000,
      });
    }

    return !component.newTodoForm.dirty;
  }
}
