import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../home/about/about.component';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { PricesComponent } from '../home/prices/prices.component';

import { LobbyComponent } from './lobby.component';

const routes: Routes = [
  {
    path: '',
    component: LobbyComponent,
    title: 'Active Time | Task Manager',
    children: [
      {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyRoutingModule { }
