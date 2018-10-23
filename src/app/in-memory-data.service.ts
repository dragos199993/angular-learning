import { Injectable } from '@angular/core';
import { Task } from './Tasks/Task';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const tasks = [
      { id: 1, content: 'first msg'},
      { id: 2, content: 'second msg'},
      { id: 3, content: 'third msg'},
      { id: 4, content: 'fourth msg'},
      { id: 5, content: 'fifth msg'},
    ];
    return { tasks }
  }

  genId(tasks: Task[]): number{
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
