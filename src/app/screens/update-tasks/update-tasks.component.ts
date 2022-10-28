import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css']
})
export class UpdateTasksComponent implements OnInit {

  isLoading: boolean = false;
  tasks: any = [];
  constructor(private fs: FirebaseService) {
    this.getTasks();    
   }

  ngOnInit(): void {
  }

  async getTasks() {
    this.isLoading = true;
    const data = await this.fs.getTasksByUser(localStorage.getItem('att-session') || '');
    this.tasks = data;
    this.isLoading = false;
    console.log(data);
  }

  updateTask(index: number) {
    console.log(index);
  }
}
