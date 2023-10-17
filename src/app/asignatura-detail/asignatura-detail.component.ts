import { Component, Input } from '@angular/core';
import { Asignatura } from '../asignatura';

@Component({
  selector: 'app-asignatura-detail',
  templateUrl: './asignatura-detail.component.html',
  styleUrls: ['./asignatura-detail.component.css']
})
export class AsignaturaDetailComponent {
  @Input() asig?: Asignatura;
}
