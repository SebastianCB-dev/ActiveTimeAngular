import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-update-tasks',
  templateUrl: './update-tasks.component.html',
  styleUrls: ['./update-tasks.component.css']
})
export class UpdateTasksComponent implements OnInit {
  taskCharged: boolean = false;
  isLoading: boolean = false;
  tasks: any = [];
  currentTask = {
    "name": "",
    "description": "",
    "priority": "",
    "initialDate": "",
    "finalDate": "",
    "id": "",
    "isCompleted": false
  };

  isThereATask: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    "name": [, [Validators.required, Validators.minLength(1)]],
    "description": [, [Validators.required, Validators.minLength(1)]],
    "priority": [, [Validators.required]],
    "initialDate": [, [Validators.required]],
    "finalDate": [, [Validators.required]],
    "isCompleted": [, [Validators.required]]
  })
  
  isValidForm: boolean = true;
  isCreating: boolean = false;
  wasUpdated: boolean = false;
  touchButton: boolean = false;
  constructor(private fs: FirebaseService,
    private fb: FormBuilder) {
    this.getTasks();    
   }

  ngOnInit(): void {
    this.clearForm();
    this.miFormulario.get('name')?.disable();
    this.disableForm();
  }

  async getTasks() {
    this.isLoading = true;
    const data = await this.fs.getTasksByUser(localStorage.getItem('att-session') || '');
    this.tasks = data;
    this.isLoading = false;
    this.taskCharged = true;
  }

  changeDataTask(index: number) {
    this.wasUpdated = false;
    this.touchButton = false;
    this.enableForm();    
    this.currentTask = this.tasks[index];
    this.isThereATask = true;
    this.miFormulario.setValue({ 'name': this.tasks[index]['name'], 'description': this.tasks[index]['description'], 'priority': this.tasks[index]['priority'], 'initialDate': this.tasks[index]['initialDate'], 'finalDate': this.tasks[index]['finalDate'], 'isCompleted': this.tasks[index]['isCompleted'] });
  }

  async updateTask() { 

    if(!(this.miFormulario.valid) ||
       (this.miFormulario.get('initialDate')?.value > this.miFormulario.get('finalDate')?.value ) || this.miFormulario.get('description')?.value.trim().length === 0){      
      this.touchButton = true;
      this.wasUpdated = false;
      return;
    }

    this.isLoading = true;
    this.updateValues();
    console.log(this.currentTask);
    await this.fs.updateTask(this.currentTask);
    await this.getTasks();
    this.touchButton = true;
    this.cancelUpdate();
    this.isLoading = false;
    this.wasUpdated = true;
  }

  writing() {
    this.isValidForm = true;
  }

  getMinDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  clearForm() {

    this.miFormulario.reset({
      "name": '',
      "description": '',
      "priority": 'Medium',
      "initialDate": '',
      "finalDate": '',
      "isCompleted": true
    });
  }

  disableForm() {
    this.miFormulario.get('name')?.disable();
    this.miFormulario.get('description')?.disable();
    this.miFormulario.get('priority')?.disable();
    this.miFormulario.get('initialDate')?.disable();
    this.miFormulario.get('finalDate')?.disable();
    this.miFormulario.get('isCompleted')?.disable();
  }
  enableForm() {
    this.miFormulario.get('description')?.enable();
    this.miFormulario.get('priority')?.enable();
    this.miFormulario.get('initialDate')?.enable();
    this.miFormulario.get('finalDate')?.enable();
    this.miFormulario.get('isCompleted')?.enable();
  }

  cancelUpdate() {
    this.isThereATask = false;
    this.clearForm();
    this.disableForm();
  }

  updateValues() {
    this.currentTask.description = this.miFormulario.get('description')?.value;
    this.currentTask.priority = this.miFormulario.get('priority')?.value;
    this.currentTask.initialDate = this.miFormulario.get('initialDate')?.value;
    this.currentTask.finalDate = this.miFormulario.get('finalDate')?.value;
    this.currentTask.isCompleted = this.miFormulario.get('isCompleted')?.value == 'true' ? true : false;
  }
}
