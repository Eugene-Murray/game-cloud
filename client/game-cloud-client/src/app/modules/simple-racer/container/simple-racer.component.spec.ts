import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRacerComponent } from './simple-racer.component';

describe('SimpleRacerComponent', () => {
  let component: SimpleRacerComponent;
  let fixture: ComponentFixture<SimpleRacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
