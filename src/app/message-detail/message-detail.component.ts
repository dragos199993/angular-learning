import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Tasks/Task'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskService } from '../task.service';


@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
    ) { }
  @Input() task: Task;

  ngOnInit(): void{
    this.getTask();
  }

  getTask(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
      .subscribe( task => this.task = task);
  }

  save() :void{
      this.taskService.updateTask(this.task)
        .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
