import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';

import { AboutComponent } from '../home/about/about.component';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { LobbyComponent } from './lobby.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { PricesComponent } from '../home/prices/prices.component';


@NgModule({
  declarations: [
    AboutComponent,
    HomePageComponent,
    LobbyComponent,    
    MenuComponent,
    PricesComponent
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
  ]
})
export class LobbyModule { }
