import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
const routes: Routes = [
  { path: 'Asignatura', component: AsignaturaComponent },
  { path: 'Pregunta', component: PreguntaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
