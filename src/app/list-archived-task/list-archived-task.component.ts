import { Component, OnInit } from '@angular/core';
import { ListTaskService } from '../list-task.service';
import { Task } from '../list-task/task';

@Component({
  selector: 'app-list-archived-task',
  templateUrl: './list-archived-task.component.html',
  styleUrls: ['./list-archived-task.component.css']
})
export class ListArchivedTaskComponent implements OnInit {

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
