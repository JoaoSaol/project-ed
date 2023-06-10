import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MapaPage } from './mapa';
import { MapaRoutingModule } from './mapa-routing.module';
// import { DenunciasRoutingModule } from './denuncias-routing.module';
// import { DenunciasPage } from './denuncias';
// import { RegistroRoutingModule } from './registro-routing.module';
// import { RegistroPage } from './registro';

// import { SchedulePage } from './schedule';
// import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
// import { SchedulePageRoutingModule } from './schedule-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MapaRoutingModule
    ],
    declarations: [
        MapaPage,
        // ScheduleFilterPage
    ]
})
export class MapaModule { }
