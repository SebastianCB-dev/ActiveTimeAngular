import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';


@NgModule({
  declarations: [
    LobbyPageComponent,
    AddTasksComponent,
    DeleteTasksComponent,
    UpdateTasksComponent,
    ListTasksComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
