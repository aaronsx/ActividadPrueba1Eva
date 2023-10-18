import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { AppRoutingModule } from './app-routing.module';
import { PreguntaDetailComponent } from './pregunta/pregunta-detail/pregunta-detail.component';
import { AsignaturaDetailsComponent } from './asignatura/asignatura-details/asignatura-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntaComponent,
    AsignaturaComponent,
    PreguntaDetailComponent,
    AsignaturaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
