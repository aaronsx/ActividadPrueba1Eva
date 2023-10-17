import { Component } from '@angular/core';
import { Asignatura } from '../asignatura';
import { ServicioAsignaturaService } from '../Servicio/servicio-asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent {
  asignaturas: Asignatura[] = [];
  constructor(private AsignService: ServicioAsignaturaService) { }
  //Resive el observable de hero.service.ts (getHeroes(): Observable<Hero[]>)
  getAsignatura(): void {
    this.AsignService.getAsignatura()
        .subscribe(asignaturas => this.asignaturas = asignaturas);
  }
  ngOnInit(): void {
    
    this.getAsignatura();
  }
}
