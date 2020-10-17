import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpriteSheetService {
  public map: any = {};
  public image: HTMLImageElement;

  constructor() {}

  load(spriteData: any, callback: any): void {
    this.map = spriteData;
    this.image = new Image();
    this.image.onload = callback;
    this.image.src = 'images/sprites.png';
  }

  draw(ctx: any, sprite: any, x: any, y: any, frame: any): void {
    const s = this.map[sprite];
    if (!frame) {
      frame = 0;
    }

    ctx.drawImage(
      this.image,
      s.sx + frame * s.w,
      s.sy,
      s.w,
      s.h,
      Math.floor(x),
      Math.floor(y),
      s.w,
      s.h
    );
  }
}
