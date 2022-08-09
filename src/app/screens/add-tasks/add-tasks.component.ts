import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { SoundsService } from 'src/app/services/sounds.service';

// ID
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    "task-name": [,[Validators.required, Validators.minLength(1)]],
    "task-description": [,[Validators.required, Validators.minLength(1)]],
    "priority": [, [Validators.required]],
    "initial-date": [,[Validators.required]],
    "final-date": [,[Validators.required]]
  })

  isValidForm: boolean = true;
  isCreating: boolean = false;
  constructor(
    private fb: FormBuilder,
    private fs: FirebaseService,
    private ss: SoundsService
  ) { }

  ngOnInit(): void {
    this.clearForm();
  }

  async addTask() {
    this.isCreating = true;
    if(!this.miFormulario.valid) {
      this.isValidForm = false;
      this.isCreating = false;
      this.ss.error();
      return;
    }
    if(this.miFormulario.controls['initial-date'].value > this.miFormulario.controls['final-date'].value) {
      this.isValidForm = false;
      this.isCreating = false;
      this.ss.error();
      return;
    }
    const task = {
      id: uuidv4(),
      user: localStorage.getItem('att-session'),
      name: this.miFormulario.controls["task-name"].value,
      description: this.miFormulario.controls["task-description"].value,
      priority: this.miFormulario.controls["priority"].value,
      initialDate: this.miFormulario.controls["initial-date"].value,
      finalDate: this.miFormulario.controls["final-date"].value
    };
    await this.fs.registerTask(task);
    this.isCreating = false;
    this.ss.success();
    // Reset form
    this.clearForm();
    this.writing();
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

  writing() {
    this.isValidForm = true;
  }

  getMinDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}
