import { Component, Input } from '@angular/core';
import { Asignatura } from 'src/app/modelo/asignatura';
@Component({
  selector: 'app-asignatura-details',
  templateUrl: './asignatura-details.component.html',
  styleUrls: ['./asignatura-details.component.css']
})
export class AsignaturaDetailsComponent {
  @Input() asignaturas?:Asignatura;
}
