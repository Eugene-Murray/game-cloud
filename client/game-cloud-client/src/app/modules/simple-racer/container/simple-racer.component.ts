import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
  ViewChild,
} from '@angular/core';

import { AppService } from './../services/app.service';
import { GameService } from './../services/game.service';

@Component({
  selector: 'app-simple-racer',
  templateUrl: './simple-racer.component.html',
  styleUrls: ['./simple-racer.component.scss'],
})
export class SimpleRacerComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas: ElementRef;
  subscription: any;
  showLoader = true;

  constructor(
    private appService: AppService,
    private gameService: GameService
  ) {}

  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.appService.createPlayGround(canvasEl);
    this.subscription = this.appService
      .getImageLoadEmitter()
      .subscribe((item) => {
        this.showLoader = false;
        this.gameService.startGameLoop();
      });
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ): void {
    this.appService.movePlayer(event, 'keydown');
  }

  @HostListener('document:keyup', ['$event']) onKeyupHandler(
    event: KeyboardEvent
  ): void {
    this.appService.movePlayer(event, 'keyup');
  }
}
