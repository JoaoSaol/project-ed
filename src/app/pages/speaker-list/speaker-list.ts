import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];

  constructor(
    public confData: ConferenceData,
    private router: Router
    
    ) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  async navegarParaRegistro() {
    await this.router.navigate(['app/tabs/registro'])
  }

  async navegarParaAlertas() {
    await this.router.navigate(['app/tabs/alertas'])
  }

  async navegarParaMapa() {
    await this.router.navigate(['app/tabs/mapa'])
  }

  irParaDenuncias( ) {
    this.router.navigate(['app/tabs/denuncias'])

  }
}
