import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaDetailComponent } from './asignatura-detail.component';

describe('AsignaturaDetailComponent', () => {
  let component: AsignaturaDetailComponent;
  let fixture: ComponentFixture<AsignaturaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturaDetailComponent]
    });
    fixture = TestBed.createComponent(AsignaturaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
