import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board.component';
import { PositionComponent } from './position.component';
import { GameService } from './game.service';
import { NumberSelectorComponent } from './number-selector.component';

@NgModule({
  declarations: [
    BoardComponent,
    PositionComponent,
    NumberSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [BoardComponent]
})
export class AppModule { }
