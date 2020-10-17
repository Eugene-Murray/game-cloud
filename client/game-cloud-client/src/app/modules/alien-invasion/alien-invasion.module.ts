import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlienInvasionComponent } from './container/alien-invasion.component';
import { GameService } from './services/game.service';
import { EngineService } from './services/engine.service';
import { TitleScreenComponent } from './components/title-screen/title-screen.component';

@NgModule({
  declarations: [AlienInvasionComponent, TitleScreenComponent],
  providers: [GameService, EngineService],
  imports: [
    CommonModule
  ]
})
export class AlienInvasionModule { }
