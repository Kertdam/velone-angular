import { Component, OnInit } from '@angular/core';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { Etape } from 'src/app/models/etape/etape.model';
import { TrajetService } from 'src/app/_services/trajet/trajet.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.scss']
})
export class TrajetsComponent implements OnInit {

  id: number;
  trajets: Trajet[];
  etapes:Etape[] = [{ "id": 1, "nom": "Etape1", "lattitude": 49.8941708, "longitude": 2.2956951, "elevation": 40.00 },
      { "id": 2, "nom": "Etape2", "lattitude": 49.9862177, "longitude": 2.4444840, "elevation": 40.00 },
      { "id": 3, "nom": "Etape3", "lattitude": 50.0053294, "longitude": 2.4786409, "elevation": 40.00 },
      { "id": 3, "nom": "Etape3", "lattitude": 50.0728994, "longitude": 2.5306202, "elevation": 40.00 }];


  constructor(private trajetService: TrajetService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.trajetService.getTrajets().subscribe(res => {
      res.forEach(element => {
        element.etapes=this.etapes;
      });
      this.trajets = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}