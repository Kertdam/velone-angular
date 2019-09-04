import { Component, OnInit } from '@angular/core';
import { TrajetService } from 'src/app/_services/trajet/trajet.service';
import { EtapeService } from 'src/app/_services/etape/etape.service';
import { UtilisateurService } from 'src/app/_services/utilisateur/utilisateur.service';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { Etape } from 'src/app/models/etape/etape.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

import * as L from 'leaflet';
import 'leaflet-routing-machine';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.scss']
})
export class TrajetComponent implements OnInit {

  id: number;
  trajet: Trajet;
  isLoaded = false;

  constructor(private trajetService: TrajetService, private etapeService: EtapeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.trajetService.getTrajetById(this.id).subscribe(trajet => {
      this.trajet = trajet;
      console.log(trajet.etapes)
    }, err => {
      console.log(err);
    });
  }
}
