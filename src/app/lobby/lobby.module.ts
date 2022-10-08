import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { AboutComponent } from '../home/about/about.component';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { PricesComponent } from '../home/prices/prices.component';


@NgModule({
  declarations: [
    LobbyComponent,    
    AboutComponent,
    HomePageComponent,
    MenuComponent,
    PricesComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
  ]
})
export class LobbyModule { }
