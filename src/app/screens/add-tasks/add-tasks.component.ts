import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  isFirstOption = true;

  constructor() { }

  ngOnInit(): void {
  }

  nextOption() {
    this.isFirstOption = false;
  }

  backOption() {
    this.isFirstOption = true;
  }
  
}
