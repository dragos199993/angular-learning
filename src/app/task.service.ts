import { Injectable } from '@angular/core';
import { Task } from './Tasks/Task';
import { TASKS } from './Tasks/TaskList';
import { Observable, of } from 'rxjs';
import { BoardService } from './board.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksUrl = 'api/tasks';
  
  constructor(private boardService: BoardService,private http: HttpClient) { }
  
  getTasks():Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        tap(tasks => this.log('fetched tasks')),
        catchError(this.handleError('getTasks', []))
      )
  }
  getTask(id: number):Observable<Task> {
    // TODO: send the message __after__ fetching the heroes
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url)
      .pipe(
        tap(_=> this.log(`fetched task id=${id}`)),
        catchError(this.handleError<Task>(`getTask id=${id}`))
      )
  }

  updateTask ( task: Task ): Observable<any> {
    return this.http.put(this.tasksUrl, task, httpOptions)
      .pipe(
        tap(_=> this.log(`updated task id=${task.id}`))
      )
  }

  addTask ( task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions)
      .pipe(
        tap((task: Task) => this.log(`added task w/ id=${task.id}`)),
        catchError(this.handleError<Task>(`addHero`))
      )
  }

  deleteTask ( task: Task | number): Observable<Task> {
    const id = typeof task === 'number' ? task : task.id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Task>(url, httpOptions)
      .pipe(
        tap(_=> this.log(`deleted task id=${id}`)),
        catchError(this.handleError<Task>('deleteTask'))
      )
  }

  searchTasks(term: string): Observable<Task[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Task[]>(`${this.tasksUrl}/?content=${term}`)
      .pipe(
        tap(_=>this.log(`found tasks matching "${term}"`)),
        catchError(this.handleError<Task[]>('searchTasks', []))
      )
  }

  private log(message: string) {
    this.boardService.add(`TaskService: ${message}`);
  }

  private handleError<T> ( operation = 'operation', result? : T){
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
