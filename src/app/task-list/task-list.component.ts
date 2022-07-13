import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() task: any;
  name = '';
  desc = '';


  ngOnInit(): void {
   this.name = this.task.name;
   this.desc = this.task.description;
  }



}
