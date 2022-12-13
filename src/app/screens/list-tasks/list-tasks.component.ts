import { Component } from '@angular/core';

import {FirebaseService} from "../../services/firebase.service";

import { Priority } from 'src/app/interfaces/priority.interface';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent {

  tasks_completed: Task[] = [];
  tasks_no_completed: Task[] = [];
  isLoading: boolean = false;
  value_priority: Priority = {
    'Low': 0,
    'Medium': 1,
    'High': 2
  }
  constructor( private fs: FirebaseService) {
    this.getData();
  }

  async getData() {
    this.isLoading = true;
    const data = await this.fs.getTasksByUser(localStorage.getItem('att-session') || '');
    this.tasks_completed = this.sortData(data.filter((task: Task) => task['isCompleted'] === true ));
    this.tasks_no_completed = this.sortData(data.filter((task: Task) => task['isCompleted'] === false ));
    this.isLoading = false;
  }

  sortData(data: Task[]) {
    return data.sort((a: Task, b: Task) => {      
      if (this.value_priority[a.priority as keyof Priority]  > 
          this.value_priority[b.priority as keyof Priority]) {
        return -1;
      }
      else {
        return 0;
      }
    });; 
  }
}
