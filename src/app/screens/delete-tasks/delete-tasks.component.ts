import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";

import Swal from 'sweetalert2';

import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-delete-tasks',
  templateUrl: './delete-tasks.component.html',
  styleUrls: ['./delete-tasks.component.css']
})
export class DeleteTasksComponent implements OnInit {

  taskCharged: boolean = false;
  isLoading: boolean = false;
  tasks: Task[] = [];

  constructor(private fs: FirebaseService) {
    this.getData();
  }

  ngOnInit(): void {}

  async getData() {
    this.isLoading = true;
    this.tasks = await this.fs.getTasksByUser(localStorage.getItem('att-session') || '');
    this.isLoading = false;
    this.taskCharged = true;
  }

  deleteTask(task: Task) {
    // Confirmar
    Swal.fire({
      title: 'Do you want to delete this task?',
      text: `Task: ${task.name}`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      confirmButtonColor: '#41A10C'
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await this.fs.deleteTask(task.id);
        await this.getData();
      }
    });
  }
}
