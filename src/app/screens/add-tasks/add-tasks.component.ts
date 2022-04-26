import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

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

  constructor(
    private fb: FormBuilder,
    private fs: FirebaseService
  ) { }

  ngOnInit(): void {
    this.clearForm();
  }

  async addTask() {

    if(!this.miFormulario.valid) {
      this.isValidForm = false;
      return;
    }
    
    const task = {
      id: uuidv4(),
      name: this.miFormulario.controls["task-name"].value,
      description: this.miFormulario.controls["task-description"].value,
      priority: this.miFormulario.controls["priority"].value,
      initialDate: this.miFormulario.controls["initial-date"].value,
      finalDate: this.miFormulario.controls["final-date"].value
    };

    await this.fs.registerTask(task);
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


}
