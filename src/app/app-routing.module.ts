import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { LieuComponent } from './lieu/lieu.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ProximiteComponent } from './proximite/proximite.component';
import { ServicesComponent } from './services/services.component';
import { SliderComponent } from './slider/slider.component';
import { ProchainesEtapesComponent } from './prochaines-etapes/prochaines-etapes.component';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  {
    path: 'lieu',
    component: LieuComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'calendrier',
    component: CalendrierComponent
  },
  {
    path: 'partenaires',
    component: PartenairesComponent
  },
  {
    path: 'proximite',
    component: ProximiteComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'prochaines-etapes',
    component: ProchainesEtapesComponent
  },
  {
    path: 'equipe',
    component: EquipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
