import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateToDoComponent} from './create-to-do-component/create-to-do-component.component';
import { ToDoListComponent } from './create-to-do-component/to-do-list-component/to-do-list-component.component';
import { DoneListComponent } from './create-to-do-component/done-list-component/done-list-component.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/Create', pathMatch: 'full' },
  { path: 'Create', component: CreateToDoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
