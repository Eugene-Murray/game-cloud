import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleRacerComponent } from './container/simple-racer.component';
import { AppService } from './services/app.service';
import { GameService } from './services/game.service';


@NgModule({
  declarations: [SimpleRacerComponent],
  providers: [AppService, GameService],
  imports: [
    CommonModule
  ]
})
export class SimpleRacerModule { }
