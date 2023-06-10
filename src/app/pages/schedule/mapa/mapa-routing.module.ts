import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaPage } from './mapa';
// import { DenunciasPage } from './registro';

// import { RegistroPage } from './sche';

const routes: Routes = [
  {
    path: '',
    component: MapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule { }
