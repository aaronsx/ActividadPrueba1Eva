import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaDetailsComponent } from './asignatura-details.component';

describe('AsignaturaDetailsComponent', () => {
  let component: AsignaturaDetailsComponent;
  let fixture: ComponentFixture<AsignaturaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturaDetailsComponent]
    });
    fixture = TestBed.createComponent(AsignaturaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
