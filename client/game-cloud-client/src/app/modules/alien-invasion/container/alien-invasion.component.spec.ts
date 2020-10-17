import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienInvasionComponent } from './alien-invasion.component';

describe('AlienInvasionComponent', () => {
  let component: AlienInvasionComponent;
  let fixture: ComponentFixture<AlienInvasionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlienInvasionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlienInvasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
