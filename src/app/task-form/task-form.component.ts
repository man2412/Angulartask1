import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.sass']
})
export class TaskFormComponent {
  taskForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      
    });
  }
  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = this.taskForm.value as Task;

      // Call the service to add the task (you need to implement the addTask() method in the TaskService)
      this.taskService.addTask(newTask).subscribe(() => {
        // Redirect to the TaskListComponent after adding the task
        this.router.navigate(['/tasks']);
      });
    }
  }
  
}
