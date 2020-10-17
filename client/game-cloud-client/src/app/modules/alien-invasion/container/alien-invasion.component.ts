import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-alien-invasion',
  templateUrl: './alien-invasion.component.html',
  styleUrls: ['./alien-invasion.component.scss']
})
export class AlienInvasionComponent implements OnInit, AfterViewInit {
  @ViewChild('game-canvas') public canvas: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
  }

}
