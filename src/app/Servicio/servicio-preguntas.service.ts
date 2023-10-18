import { Injectable } from '@angular/core';
import { Pregunta } from '../modelo/pregunta';
import { Observable, of } from 'rxjs';
import { PREGUNTAS } from '../modelo/mock-pregunta';

@Injectable({
  providedIn: 'root'
})
export class ServicioPreguntasService {
  
  
  constructor() { }
  getPregunta(): Observable<Pregunta[]> {
    
   
    //Devuelve el observable y lo envia a .component.ts
    return  of(PREGUNTAS);
  }
}
