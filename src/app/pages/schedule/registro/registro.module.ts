import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro';

// import { SchedulePage } from './schedule';
// import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
// import { SchedulePageRoutingModule } from './schedule-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegistroRoutingModule
    ],
    declarations: [
        RegistroPage,
        // ScheduleFilterPage
    ]
})
export class RegistroModule { }
