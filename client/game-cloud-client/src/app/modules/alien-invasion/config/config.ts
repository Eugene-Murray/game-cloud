
export const sprites = {
  ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
  missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
  enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
  enemy_bee: { sx: 79, sy: 0, w: 37, h: 43, frames: 1 },
  enemy_ship: { sx: 116, sy: 0, w: 42, h: 43, frames: 1 },
  enemy_circle: { sx: 158, sy: 0, w: 32, h: 33, frames: 1 },
  explosion: { sx: 0, sy: 64, w: 64, h: 64, frames: 12 },
  enemy_missile: { sx: 9, sy: 42, w: 3, h: 20, frame: 1, }
 };

export const enemies = {
   straight: { x: 0,   y: -50, sprite: 'enemy_ship', health: 10,
               E: 100 },
   ltr:      { x: 0,   y: -100, sprite: 'enemy_purple', health: 10,
               B: 75, C: 1, E: 100, missiles: 2  },
   circle:   { x: 250,   y: -50, sprite: 'enemy_circle', health: 10,
               A: 0,  B: -100, C: 1, E: 20, F: 100, G: 1, H: Math.PI/2 },
   wiggle:   { x: 100, y: -50, sprite: 'enemy_bee', health: 20,
               B: 50, C: 4, E: 100, firePercentage: 0.001, missiles: 2 },
   step:     { x: 0,   y: -50, sprite: 'enemy_circle', health: 10,
               B: 150, C: 1.2, E: 75 }
 };

export const level1 = [
  // Start,   End, Gap,  Type,   Override
   [ 0,      4000,  500, 'step' ],
   [ 6000,   13000, 800, 'ltr' ],
   [ 10000,  16000, 400, 'circle' ],
   [ 17800,  20000, 500, 'straight', { x: 50 } ],
   [ 18200,  20000, 500, 'straight', { x: 90 } ],
   [ 18200,  20000, 500, 'straight', { x: 10 } ],
   [ 22000,  25000, 400, 'wiggle', { x: 150 }],
   [ 22000,  25000, 400, 'wiggle', { x: 100 }]
 ];
