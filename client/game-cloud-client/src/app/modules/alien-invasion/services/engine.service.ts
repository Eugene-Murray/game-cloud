import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor() { }

  initialize(canvasElementId: any, spriteData: any, callback: any): void {
    // this.canvas = document.getElementById(canvasElementId);

    // this.playerOffset = 10;
    // this.canvasMultiplier= 1;
    // this.setupMobile();

    // this.width = this.canvas.width;
    // this.height= this.canvas.height;

    // this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
    // if(!this.ctx) { return alert("Please upgrade your browser to play"); }

    // this.setupInput();

    // this.loop();

    // if(this.mobile) {
    //   this.setBoard(4,new TouchControls());
    // }

    // SpriteSheet.load(sprite_data,callback);
  }

  setupMobile(): void {}

  setupInput(): void {}

  setBoard(): void {}
}
