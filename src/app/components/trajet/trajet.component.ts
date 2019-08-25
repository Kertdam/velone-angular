import { Component, OnInit } from '@angular/core';
import { TrajetService } from 'src/app/_services/trajet/trajet.service';
import { UtilisateurService } from 'src/app/_services/utilisateur/utilisateur.service';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { Etape } from 'src/app/models/etape/etape.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

import * as L from 'leaflet';
import 'leaflet-routing-machine';
@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.scss']
})
export class TrajetComponent implements OnInit {

  id: number;
  trajet: Trajet=new Trajet();
  
constructor(private trajetService: TrajetService, private route: ActivatedRoute) { }

ngOnInit() {
  let carte = L.map('carte',{zoomControl:false }).setView([50.6311634, 3.0599573], 1);
 
  let wp = new Array<L.LatLng>()

  this.id = Number(this.route.snapshot.paramMap.get('id'));
  this.trajetService.getTrajetById(this.id).subscribe(res => {
    this.trajet = res;
    // En attendant d'avoir le back pour Etape
    this.trajet.etapes=[{"id":1,"nom":"Etape1","lattitude":49.8941708,"longitude":2.2956951,"elevation":40.00},
                        {"id":2,"nom":"Etape2","lattitude":49.9862177,"longitude":2.4444840,"elevation":40.00},
                        {"id":3,"nom":"Etape3","lattitude":50.0053294,"longitude":2.4786409,"elevation":40.00},
                        {"id":3,"nom":"Etape3","lattitude":50.0728994,"longitude":2.5306202,"elevation":40.00}];
    console.log(this.trajet);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'carte'
    }).addTo(carte);
    // Transform Etape to Waypoint
    for (let etape of this.trajet.etapes) {
       wp.push(L.latLng(etape.lattitude, etape.longitude));
    }
   
    //carte.fitBounds(this.detectBounds(this.trajet.etapes));

    // Add waypoints to leaflet map
    L.Routing.control({
      waypoints:(wp),
      routeWhileDragging: false,
      draggableWaypoints : false,
      show: false
    }).addTo(carte);

    carte.dragging.disable();
    carte.touchZoom.disable();
    carte.doubleClickZoom.disable();
    carte.scrollWheelZoom.disable();
    carte.boxZoom.disable();
    carte.keyboard.disable();

  }, err => {
    console.log(err);
  });
}
  
detectBounds(etapes:Etape[]){
  let maxLat: number;
  let maxLng: number;
  let minLat: number;
  let minLng : number ;
  
  for (let etape of this.trajet.etapes) {
    if(etape.lattitude > maxLat || maxLat==null){
      maxLat=etape.lattitude; 
    }
    if(etape.lattitude < minLat || minLat==null){
      minLat=etape.lattitude; 
    }
    if(etape.longitude > maxLng || maxLng==null){
      maxLng=etape.longitude; 
    }
    if(etape.longitude < minLng || minLng==null){
      minLng=etape.longitude; 
    }
  }
  return [[maxLat,maxLng],[minLat,minLng]] ;

  }
}