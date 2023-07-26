import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
