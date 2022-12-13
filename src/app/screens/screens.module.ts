import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScreensRoutingModule } from './screens-routing.module';
import { ComponentsModule } from '../components/components.module';

import { ConvertStatus } from '../pipes/convertStatus.pipe';

import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';


@NgModule({
  declarations: [
    ConvertStatus,
    AddTasksComponent,
    ButtonLogoutComponent,
    DeleteTasksComponent,
    ListTasksComponent,
    LobbyPageComponent,
    UpdateTasksComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ]
})
export class ScreensModule { }
