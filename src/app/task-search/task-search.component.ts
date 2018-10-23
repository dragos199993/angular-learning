import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";
import { Task } from "../Tasks/Task";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "app-task-search",
  templateUrl: "./task-search.component.html",
  styleUrls: ["./task-search.component.css"]
})
export class TaskSearchComponent implements OnInit {
  tasks$: Observable<Task[]>;
  private searchTasks = new Subject<string>();

  constructor(private taskService:TaskService) {}

  search(term: string): void {
    this.searchTasks.next(term);
  }

  ngOnInit():void {
    this.tasks$ = this.searchTasks.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.taskService.searchTasks(term))
    )
  }
}
