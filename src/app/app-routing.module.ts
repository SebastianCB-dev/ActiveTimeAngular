import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PricesComponent } from "./prices/prices.component";
import {AuthGuard} from "./screens/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    title: 'Active Time | Task Manager'
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
    path: 'prices',
    component: PricesComponent,
    title: 'Active Time | Prices'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Active Time | About'
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
