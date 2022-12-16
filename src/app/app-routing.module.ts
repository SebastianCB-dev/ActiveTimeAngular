import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";

import {AuthGuard} from "./screens/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./lobby/lobby.module').then(m => m.LobbyModule),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./screens/screens.module').then(m => m.ScreensModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
