import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleRacerComponent } from './container/simple-racer.component';
import { AppService } from './services/app.service';
import { GameService } from './services/game.service';
import { TestService } from './services/test.service';


@NgModule({
  declarations: [SimpleRacerComponent],
  providers: [AppService, GameService, TestService],
  imports: [
    CommonModule
  ]
})
export class SimpleRacerModule { }
