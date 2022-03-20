import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import {AuthGuard} from "./screens/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
