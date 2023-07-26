import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  private taskListSubscription!: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
    this.taskListSubscription = this.taskService.getTaskListUpdates().subscribe(updatedTasks => {
      this.tasks = updatedTasks;
  });
}

  loadTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  onDeleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId)
      .subscribe(() => {
        this.loadTasks(); 
      });
  }
}
