import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LobbyPageComponent} from "./lobby-page/lobby-page.component";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'menu',
      component: LobbyPageComponent
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
