import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenunciasPage } from './denuncias';
// import { DenunciasPage } from './registro';

// import { RegistroPage } from './sche';

const routes: Routes = [
  {
    path: '',
    component: DenunciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenunciasRoutingModule { }
