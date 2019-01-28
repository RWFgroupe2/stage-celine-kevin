import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximiteComponent } from './proximite.component';

describe('ProximiteComponent', () => {
  let component: ProximiteComponent;
  let fixture: ComponentFixture<ProximiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
