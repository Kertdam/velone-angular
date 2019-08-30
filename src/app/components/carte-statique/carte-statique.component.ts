import { Component, AfterContentInit, Input } from '@angular/core';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { Etape } from 'src/app/models/etape/etape.model';

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

  constructor() { 
    console.log('composant carte statistique' + this.trajet)
  }

  ngAfterViewInit() {
    let tmp = 'carte-'+this.trajet.id ;
    let wp = new Array<L.LatLng>()
    // Generate leaflet map and disabcle all controls
    let carte = L.map(tmp, {
      zoomControl: false,
      keyboard: false,
      dragging: false,
      boxZoom: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      tap: false,
      touchZoom: false
    })
    console.log(this.trajet.etapes)
    // Transform Etape to Waypoint
    for (let etape of this.trajet.etapes) {
        wp.push(L.latLng(etape.lattitude, etape.longitude));
    }
    console.log("wp"+wp);

    carte.fitBounds(this.detectBounds());

    //Ajout du layer de carte leaflet depuis OSM
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: tmp
    }).addTo(carte);

    //Dissable leaflet drouting machine control and ad waypoints to map
    L.Routing.control({
      waypoints: (wp),
      routeWhileDragging: false,
      autoRoute: true,
      draggableWaypoints: false,
      show:false,
      addWaypoints:false
    }).addTo(carte);
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
}
