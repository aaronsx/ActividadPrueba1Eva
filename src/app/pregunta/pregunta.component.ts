import { Component } from '@angular/core';
import { Pregunta } from '../modelo/pregunta';
import { ServicioPreguntasService } from '../Servicio/servicio-preguntas.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent {
  preguntas?: Pregunta[] ;
  preguntaSelect?:Pregunta;
  constructor(private PregunService: ServicioPreguntasService) { }
  //Resive el observable de hero.service.ts (getHeroes(): Observable<Hero[]>)
  getPregunta(): void {
    this.PregunService.getPregunta()
        .subscribe(preguntas => this.preguntas = preguntas);
  }
  ngOnInit(): void {
    
    this.getPregunta();
  }
  
  darPregunta(pregunta:Pregunta):void{
    this.preguntaSelect=pregunta;
  }
}
