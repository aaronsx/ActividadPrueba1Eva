import { Component, Input } from '@angular/core';
import { Pregunta } from '../pregunta';

@Component({
  selector: 'app-pregunta-detail',
  templateUrl: './pregunta-detail.component.html',
  styleUrls: ['./pregunta-detail.component.css']
})
export class PreguntaDetailComponent {
  @Input() pregu?: Pregunta;
}
