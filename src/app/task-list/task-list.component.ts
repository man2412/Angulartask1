import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId)
      .subscribe(() => {
        this.loadTasks(); 
      });
  }
}
