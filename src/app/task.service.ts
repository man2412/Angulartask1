import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks';

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = this.getTasksFromLocalStorage();
    return of(tasks);
  }

  addTask(task: Task): Observable<Task> {
    const tasks = this.getTasksFromLocalStorage();
    tasks.push(task);
    this.saveTasksToLocalStorage(tasks);
    return of(task);
  }

  deleteTask(taskId: number): Observable<void> {
    const tasks = this.getTasksFromLocalStorage().filter(task => task.id !== taskId);
    this.saveTasksToLocalStorage(tasks);
    return of();
  }

  private getTasksFromLocalStorage(): Task[] {
    const tasksJson = localStorage.getItem(this.localStorageKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  private saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
}
