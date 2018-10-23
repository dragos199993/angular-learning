import { Component, OnInit } from '@angular/core';
import { Task } from "../Tasks/Task";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;
  color: boolean = false;

  constructor(
    private taskService: TaskService) {}
  
  getTasks():void { 
   this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }
}