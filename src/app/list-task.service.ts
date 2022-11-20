import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './list-task/task';

@Injectable({
  providedIn: 'root'
})
export class ListTaskService {

  private _tasks: Task[]=[];
  private _tasksSubject: BehaviorSubject<Task[]>= new BehaviorSubject(this._tasks);
  public tasks: Observable<Task[]>= this._tasksSubject.asObservable();

  constructor() { }

addTask(task : Task){
  this._tasks.push({...task});
  this._tasksSubject.next(this._tasks);
}

removeTask(id: number){
  this._tasks.forEach((task,index) => {
    if(task.id==id){
    this._tasks.splice(index, 1);
  }
})
  this._tasksSubject.next(this._tasks);
}

setArchived(id:number){
  this._tasks.forEach((task,index) => {
    if(task.id==id){
      if(task.archived==false){
        task.archived=true;
      }else{
        task.archived=false;
      }
  }
})
  this._tasksSubject.next(this._tasks);
}
}
