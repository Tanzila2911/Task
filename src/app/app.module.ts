import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateToDoComponent } from './create-to-do-component/create-to-do-component.component';
import { ToDoListComponent } from './create-to-do-component/to-do-list-component/to-do-list-component.component';
import { DoneListComponent } from './create-to-do-component/done-list-component/done-list-component.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreateToDoComponent,
    ToDoListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
