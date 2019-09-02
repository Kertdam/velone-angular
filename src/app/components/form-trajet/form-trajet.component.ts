import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { TrajetService } from 'src/app/_services/trajet/trajet.service';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { DatePipe } from '@angular/common';
import { GeocodingService } from 'src/app/_services/geocoding/geocoding.service';
import { ElevationService } from 'src/app/_services/elevation/elevation.service';

@Component({
  selector: 'app-form-trajet',
  templateUrl: './form-trajet.component.html',
  styleUrls: ['./form-trajet.component.scss']
})
export class FormTrajetComponent implements OnInit {
  results: string[];
  datasNom = [];
  datas : any ;
  trajetForm: FormGroup;
  etapes: FormArray;

  constructor(private formBuilder: FormBuilder, 
              private trajetService: TrajetService, 
              private datePipe: DatePipe, 
              private geocodingService: GeocodingService,
              private elevationService: ElevationService) {

  }

  ngOnInit() {
    this.trajetForm = this.formBuilder.group({
      nom: '',
      description: '',
      dateDepart: '',
      etapes: this.formBuilder.array([this.createEtape()])
    });
  }

  createEtape(): FormGroup {
    return this.formBuilder.group({
      nom: '',
      lattitude: '',
      longitude: '',
      elevation: ''
    });
  }

  addEtape(): void {
    this.etapes = this.trajetForm.get('etapes') as FormArray;
    this.etapes.push(this.createEtape());
  }

  searchData(event,i){
    let res = this.datas.find(feature => feature.properties.label==event);
    this.trajetForm.get('etapes').get(`${i}`).get('lattitude').setValue(res.geometry.coordinates[1]);
    this.trajetForm.get('etapes').get(`${i}`).get('longitude').setValue(res.geometry.coordinates[0]);
  }

  search(event) {
    this.geocodingService.getGeocode(event.query).subscribe(data => {
      this.datas = data.features ;
      this.datasNom = [];
      for (const d of data.features) {
        this.datasNom.push(
          d.properties.label
        );
        console.log(d);
      }
    });
  }

  handleDropdown(event) {
    event.query = this.results ;
  }

}
