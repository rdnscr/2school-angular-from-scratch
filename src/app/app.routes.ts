import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "", redirectTo: "todo", pathMatch: "full" },
  {
    path: "todo",
    loadChildren: () => import("./todo/todo.routes"),
  },
];
