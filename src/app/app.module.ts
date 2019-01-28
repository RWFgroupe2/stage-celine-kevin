import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { LieuComponent } from './lieu/lieu.component';
import { ProximiteComponent } from './proximite/proximite.component';
import { SliderComponent } from './slider/slider.component';
import { ProchainesEtapesComponent } from './prochaines-etapes/prochaines-etapes.component';
import { EquipeComponent } from './equipe/equipe.component';

import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { PieComponent } from './pie/pie.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AccueilComponent,
    PartenairesComponent,
    CalendrierComponent,
    LieuComponent,
    ProximiteComponent,
    ServicesComponent,
    SliderComponent,
    ProchainesEtapesComponent,
    EquipeComponent,
    PieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
