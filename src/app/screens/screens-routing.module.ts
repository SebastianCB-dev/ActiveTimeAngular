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
      component: LobbyPageComponent
    },
    {
      path: 'add-tasks',
      component: AddTasksComponent
    },
    {
      path: 'delete-tasks',
      component: DeleteTasksComponent
    },
    {
      path: 'update-tasks',
      component: UpdateTasksComponent
    },
    {
      path: 'list-tasks',
      component: ListTasksComponent
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
