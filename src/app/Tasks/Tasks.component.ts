import { Component, OnInit } from "@angular/core";
import { Task } from "./Task";
import { TaskService } from '../task.service';

@Component({
  selector: "app-tasks",
  templateUrl: "./Tasks.component.html",
  styleUrls: ["./Tasks.component.css"]
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}
  
  getTasks():void { 
   this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

  add(content: string): void{
    content = content.trim();
    if(!content) {return;}
    this.taskService.addTask({ content } as Task)
      .subscribe( task => {
        this.tasks.push(task)
      })
  }
  delete(task: Task): void{
    this.tasks = this.tasks.filter( h => h !== task);
    this.taskService.deleteTask(task).subscribe();
  }
}
