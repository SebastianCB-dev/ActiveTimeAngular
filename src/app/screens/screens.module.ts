import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScreensRoutingModule } from './screens-routing.module';

import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';


@NgModule({
  declarations: [
    LobbyPageComponent,
    AddTasksComponent,
    DeleteTasksComponent,
    UpdateTasksComponent,
    ListTasksComponent,
    ButtonLogoutComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ScreensModule { }
