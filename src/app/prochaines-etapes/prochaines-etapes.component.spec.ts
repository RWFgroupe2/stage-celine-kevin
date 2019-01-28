import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProchainesEtapesComponent } from './prochaines-etapes.component';

describe('ProchainesEtapesComponent', () => {
  let component: ProchainesEtapesComponent;
  let fixture: ComponentFixture<ProchainesEtapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProchainesEtapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProchainesEtapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
