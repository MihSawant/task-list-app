import { Component } from '@angular/core';
import { Task } from './shared/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList: Task[] = [];
  
  onTaskAdded(task: Task){
   this.taskList.push(task);
  }
}
