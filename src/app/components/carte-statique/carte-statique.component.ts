import { Component, AfterContentInit, Input, SimpleChange } from '@angular/core';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { Etape } from 'src/app/models/etape/etape.model';
import { SimpleChanges } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet-routing-machine';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


@Component({
  selector: 'app-carte-statique',
  templateUrl: './carte-statique.component.html',
  styleUrls: ['./carte-statique.component.scss']
})
export class CarteStatiqueComponent {

  @Input() trajet: Trajet;
  tmp: string;
  carte:any ;
  wp = new Array<L.LatLng>();

  constructor() { 
    console.log('composant carte statistique' + this.trajet);
  }

  ngAfterViewInit() {
    this.tmp = 'carte-'+this.trajet.id ;
    
    // Generate leaflet map and disabcle all controls
    this.carte = L.map(this.tmp, {
      zoomControl: false,
      keyboard: false,
      dragging: false,
      boxZoom: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      tap: false,
      touchZoom: false
    })
    
    // Transform Etape to Waypoint
    this.updateWaypoints();

    this.carte.fitBounds(this.detectBounds());

    //Ajout du layer de carte leaflet depuis OSM
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: this.tmp
    }).addTo(this.carte);

    //Dissable leaflet routing machine control and ad waypoints to map
    L.Routing.control({
      waypoints: (this.wp),
      routeWhileDragging: false,
      autoRoute: true,
      draggableWaypoints: false,
      show:false,
      addWaypoints:false
    }).addTo(this.carte);
  }
  // Transform Etape to Waypoint
  updateWaypoints(){

    this.wp= new Array<L.LatLng>()
    let emptyEtape : boolean=false;
    if(typeof(this.trajet.etapes)!=undefined){
      for (let etape of this.trajet.etapes) {
        if(typeof(etape.lattitude)=='number' &&  typeof(etape.longitude)=='number'){
          this.wp.push(L.latLng(etape.lattitude, etape.longitude));
        }else{
          emptyEtape=true;
        }
      }
    }
    if(!emptyEtape){ 
      L.Routing.control({
        waypoints: (this.wp)
      }).addTo(this.carte);
    }
    
  }

  detectBounds() {
    let maxLat: number;
    let maxLng: number;
    let minLat: number;
    let minLng: number;

    for (let etape of this.trajet.etapes) {
      if (etape.lattitude > maxLat || maxLat == null) {
        maxLat = etape.lattitude;
      }
      if (etape.lattitude < minLat || minLat == null) {
        minLat = etape.lattitude;
      }
      if (etape.longitude > maxLng || maxLng == null) {
        maxLng = etape.longitude;
      }
      if (etape.longitude < minLng || minLng == null) {
        minLng = etape.longitude;
      }
    }
    return [[maxLat, maxLng], [minLat, minLng]];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("LE CHANGEMENT ");
    console.log( this.trajet);
    this.updateWaypoints();
    this.carte.fitBounds(this.detectBounds());
    this.carte.invalidateSize();
  }
  
}
