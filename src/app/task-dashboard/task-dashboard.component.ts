import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {

  @Output() task = new EventEmitter<Task>();
  taskName = '';
  taskDescription = '';
 

  constructor() { }

  ngOnInit(): void {
  }

  onAddTaskBtnClick(){
    if(this.taskName.length <= 0 || this.taskDescription.length <= 5){
      throw new Error("Input's should have some content");
    }
    this.task.emit(new Task(this.taskName, this.taskDescription));
    this.taskName = ''; this.taskDescription = '';  
  }

}
