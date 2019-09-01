import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GeocodingService } from 'src/app/_services/geocoding/geocoding.service';
import { ElevationService } from 'src/app/_services/elevation/elevation.service';
import { FormArray,FormGroup,FormBuilder } from '@angular/forms';
import { Etape } from 'src/app/models/etape/etape.model';

@Component({
  selector: 'app-test-geocoding',
  templateUrl: './test-geocoding.component.html',
  styleUrls: ['./test-geocoding.component.scss']
})
export class TestGeocodingComponent implements OnInit {
  val : any ;
  datasNom:any[] =[] ;
  datas: any[] =[] ;
  results: string[];
  formGroup:FormGroup;
  trajet:FormArray;
  etapes:Etape[] = [{ "id": 1, "nom": "Amiens", "lattitude": 49.8941708, "longitude": 2.2956951, "elevation": 40.00 },
  { "id": 2, "nom": "Etape2", "lattitude": 49.9862177, "longitude": 2.4444840, "elevation": 40.00 },
  { "id": 3, "nom": "Etape3", "lattitude": 50.0053294, "longitude": 2.4786409, "elevation": 40.00 },
  { "id": 4, "nom": "Etape4", "lattitude": 50.0728994, "longitude": 2.5306202, "elevation": 40.00 }];

  trajetForm: FormGroup;
  constructor(private formBuilder: FormBuilder ,private geocodingService: GeocodingService, private elevationService: ElevationService) { }

  ngOnInit() {
    this.results=[];
    this.formGroup = this.formBuilder.group({
      trajet: this.formBuilder.array(this.etapes.map(elem => this.createEtapeGroup(elem)))
    });
    console.log("INIT")
    this.formGroup.controls['trajet'].controls[0].controls['nom'].value="eziufzioehezif";
    console.log(this.formGroup.get('trajet').get('0').get('nom').value);
    console.log("END INIT")
  }

  createEtapeGroup(etape:Etape): FormGroup {
    return this.formBuilder.group({
        nom: [etape.nom],
        lattitude: [etape.lattitude],
        longitude: [etape.longitude],
        elevation: [etape.elevation],
    });
  }
  searchData(event,i){
    console.log(this.datas);
    let res=this.datas.find(feature => feature.properties.label==event);
    this.formGroup.get('trajet').get(""+i).get('lattitude').setValue(res.geometry.coordinates[1]);
    this.formGroup.get('trajet').get(""+i).get('longitude').setValue(res.geometry.coordinates[0]);
    console.log("RES"+res.properties.label+" :"+res.geometry.coordinates[1]+" , "+res.geometry.coordinates[0]);
    console.log(res)
    console.log(this.formGroup.controls['nom']);
  }
  addEtapeGroup(){
    const control = <FormArray>this.formGroup.controls['trajet'];
    control.push(this.createEtapeGroup(new Etape()));
    
  }

  search(event) {
      this.geocodingService.getGeocode(event.query).subscribe(data => {
        console.log(data);
        data.features.forEach(feature => {
            console.log(feature.geometry.coordinates[0],feature.geometry.coordinates[1]);
           feature.geometry.coordinates[2]= this.elevationService.getElevation(feature.geometry.coordinates[1],feature.geometry.coordinates[0]).subscribe(elev => {
            feature.geometry.coordinates[2]=elev.data[0];
            });
        });
        this.datas = data.features ;
        /*const tmp:string[]=[];
          this.datas = data;
          
          data.features.forEach(feature => {
            console.log(feature.properties);
            tmp.push(feature.properties.label);
          });
          this.results=tmp;*/
      });
  }

  search2(event) {
    
    this.geocodingService.getGeocode(event.query).subscribe(data => {
      this.datas = data.features ;
      this.datasNom=[];
      for (const d of data.features) {
        this.datasNom.push(
          d.properties.label
        );
        console.log(d);
      }
      /*const tmp:string[]=[];
        this.datas = data;
        
        data.features.forEach(feature => {
          console.log(feature.properties);
          tmp.push(feature.properties.label);
        });
        this.results=tmp;*/
    });
}
  handleDropdown(event) {
    event.query = this.results ;
  }

}
