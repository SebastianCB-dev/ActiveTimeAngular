import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks_completed = [];
  tasks_no_completed = [];
  isLoading: boolean = false;
  value_priority: any = {
    'Low': 0,
    'Medium': 1,
    'High': 2
  }
  constructor( private fs: FirebaseService) {
    this.getData();
  }

  ngOnInit(): void {
  }

  async getData() {
    this.isLoading = true;
    const data = await this.fs.getTasksByUser(localStorage.getItem('att-session') || '');
    this.tasks_completed = this.sortData(data.filter((task: any) => task['isCompleted'] === true ));
    this.tasks_no_completed = this.sortData(data.filter((task: any) => task['isCompleted'] === false ));
    this.isLoading = false;
  }

  sortData(data: any) {
    return data.sort((a: any, b: any) => {
      if (this.value_priority[a['priority']] > this.value_priority[b['priority']]) {
        return -1;
      }
      else {
        return 0;
      }
    });; 
  }
}
