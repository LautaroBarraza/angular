import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { ListTaskService } from '../list-task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[]=[];
  constructor(private listTaskService: ListTaskService) { }

  ngOnInit(): void {
    this.listTaskService.tasks.subscribe(data => {this.tasks=data})
  }

  deleteTask(id: number){
    this.listTaskService.removeTask(id);
  }

  archiveTask(id:number){
    this.listTaskService.setArchived(id);
  }

}
