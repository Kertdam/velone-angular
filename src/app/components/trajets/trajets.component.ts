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
  constructor(private trajetService: TrajetService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.trajetService.getTrajets().subscribe(res => {
      this.trajets = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}