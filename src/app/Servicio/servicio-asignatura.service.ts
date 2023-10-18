import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Asignatura } from '../modelo/asignatura';
import { ASUGNATURAS } from '../modelo/mock-asignatura';

@Injectable({
  providedIn: 'root'
})
export class ServicioAsignaturaService {

  constructor() { }
  getAsignatura(): Observable<Asignatura[]> {
    
   
    //Devuelve el observable y lo envia a .component.ts
    return  of(ASUGNATURAS);
  }
}
