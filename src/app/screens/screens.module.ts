import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';


@NgModule({
  declarations: [
    LobbyPageComponent
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
