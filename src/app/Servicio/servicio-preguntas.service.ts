import { Injectable } from '@angular/core';
import { Pregunta } from '../pregunta';
import { Observable, of } from 'rxjs';
import { PREGUNTAS } from '../mock-preguntas';

@Injectable({
  providedIn: 'root'
})
export class ServicioPreguntasService {
  

  constructor() { }
  getPregunta(): Observable<Pregunta[]> {
    
   
    //Devuelve el observable y lo envia a heroes.component.ts
    return  of(PREGUNTAS);
  }
}
