import { Component, OnInit } from '@angular/core';
import { Task } from '../list-task/task';
import { ListTaskService } from '../list-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  tasks: Task[]=[];
  id=0;
  task: Task= {
    id: 0,
    important: false,
    name: "",
    description: "",
    archived:false
  }

  constructor(private listTaskService: ListTaskService) { }

  ngOnInit(): void {
  }

  addTask(){
    if(this.task.name!="" && this.task.description != ""){
      this.task.id +=1;
      const checkbox = document.getElementById(
        'checked',
      ) as HTMLInputElement | null;
      
      if (checkbox != null) {
        this.task.important=checkbox.checked;
      }
      this.listTaskService.addTask(this.task);
    }
  }

}
