import { Component, OnInit } from '@angular/core';
import { TrajetService } from 'src/app/_services/trajet/trajet.service';
import { UtilisateurService } from 'src/app/_services/utilisateur/utilisateur.service';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as L from 'leaflet';
@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.scss']
})
export class TrajetComponent implements OnInit {

  id: number;
  trajet: Trajet;

constructor(private trajetService: TrajetService, private route: ActivatedRoute) { }

ngOnInit() {
  const carte = L.map('carte').setView([50.6311634, 3.0599573], 12);

  this.id = Number(this.route.snapshot.paramMap.get('id'));
  this.trajetService.getTrajetById(this.id).subscribe(res => {
    this.trajet = res;
    console.log(this.trajet);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'carte'
    }).addTo(carte);
  }, err => {
    console.log(err);
  });
  
}

}
