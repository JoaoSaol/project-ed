import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertasRoutingModule } from './alertas-routing.module';
import { AlertasPage } from './alertas';
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
        AlertasRoutingModule
    ],
    declarations: [
        AlertasPage,
        // ScheduleFilterPage
    ]
})
export class AlertasModule { }
