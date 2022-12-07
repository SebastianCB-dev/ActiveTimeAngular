import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { LobbyPageComponent } from "./lobby-page/lobby-page.component";
import { UpdateTasksComponent } from './update-tasks/update-tasks.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'menu',
      component: LobbyPageComponent,
      title: 'Active Time | Menu'
    },
    {
      path: 'add-tasks',
      component: AddTasksComponent,
      title: 'Active Time | Add Tasks'
    },
    {
      path: 'delete-tasks',
      component: DeleteTasksComponent,
      title: 'Active Time | Delete Tasks'
    },
    {
      path: 'update-tasks',
      component: UpdateTasksComponent,
      title: 'Active Time | Update Tasks'
    },
    {
      path: 'list-tasks',
      component: ListTasksComponent,
      title: 'Active Time | List Tasks'
    },
    {
      path: '**',
      redirectTo: 'menu'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
