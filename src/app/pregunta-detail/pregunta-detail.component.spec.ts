import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaDetailComponent } from './pregunta-detail.component';

describe('PreguntaDetailComponent', () => {
  let component: PreguntaDetailComponent;
  let fixture: ComponentFixture<PreguntaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntaDetailComponent]
    });
    fixture = TestBed.createComponent(PreguntaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
