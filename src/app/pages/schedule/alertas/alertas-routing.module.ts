import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertasPage } from './alertas';
// import { RegistroPage } from './registro';;

// import { RegistroPage } from './sche';

const routes: Routes = [
  {
    path: '',
    component: AlertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertasRoutingModule { }
