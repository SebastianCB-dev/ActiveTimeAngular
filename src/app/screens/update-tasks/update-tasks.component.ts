import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css']
})
export class UpdateTasksComponent implements OnInit {

  isLoading: boolean = false;
  tasks: any = [];
  currentTask = {
    "name": "",
    "description": "",
    "priority": "",
    "initialDate": "",
    "finalDate": ""
  };

  isThereATask: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    "task-name": [, [Validators.required, Validators.minLength(1)]],
    "task-description": [, [Validators.required, Validators.minLength(1)]],
    "priority": [, [Validators.required]],
    "initial-date": [, [Validators.required]],
    "final-date": [, [Validators.required]]
  })
  
  isValidForm: boolean = true;
  isCreating: boolean = false;
  constructor(private fs: FirebaseService,
    private fb: FormBuilder) {
    this.getTasks();    
   }

  ngOnInit(): void {
    this.clearForm();
    this.miFormulario.get('task-name')?.disable();
    this.disableForm();
  }

  async getTasks() {
    this.isLoading = true;
    const data = await this.fs.getTasksByUser(localStorage.getItem('att-session') || '');
    this.tasks = data;
    this.isLoading = false;
  }

  changeDataTask(index: number) {
    this.enableForm();    
    this.currentTask = this.tasks[index];
    this.isThereATask = true;
  }

  updateTask() {
    
  }

  writing() {
    this.isValidForm = true;
  }

  getMinDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  clearForm() {

    this.miFormulario.reset({
      "task-name": '',
      "task-description": '',
      "priority": 'Medium',
      "initial-date": '',
      "final-date": ''
    });
  }

  disableForm() {
    this.miFormulario.get('task-name')?.disable();
    this.miFormulario.get('task-description')?.disable();
    this.miFormulario.get('priority')?.disable();
    this.miFormulario.get('initial-date')?.disable();
    this.miFormulario.get('final-date')?.disable();
  }
  enableForm() {
    this.miFormulario.get('task-description')?.enable();
    this.miFormulario.get('priority')?.enable();
    this.miFormulario.get('initial-date')?.enable();
    this.miFormulario.get('final-date')?.enable();
  }

  cancelUpdate() {
    this.isThereATask = false;
    this.clearForm();
    this.disableForm();
  }
}
