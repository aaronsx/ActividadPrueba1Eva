import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { AsignaturaDetailComponent } from './asignatura-detail/asignatura-detail.component';
import { PreguntaDetailComponent } from './pregunta-detail/pregunta-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntaComponent,
    AsignaturaComponent,
    AsignaturaDetailComponent,
    PreguntaDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
