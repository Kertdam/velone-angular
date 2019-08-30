import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GeocodingService } from 'src/app/_services/geocoding/geocoding.service';
import { ElevationService } from 'src/app/_services/elevation/elevation.service';

@Component({
  selector: 'app-test-geocoding',
  templateUrl: './test-geocoding.component.html',
  styleUrls: ['./test-geocoding.component.scss']
})
export class TestGeocodingComponent implements OnInit {
  val : any ;
  datas: any[] ;
  results: string[];

  constructor(private geocodingService: GeocodingService, private elevationService: ElevationService) { }

  ngOnInit() {
    this.results=[];
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

  handleDropdown(event) {
    event.query = this.results ;
  }

}
