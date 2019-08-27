import { Component, OnInit } from '@angular/core';
import { GeocodingService } from 'src/app/_services/geocoding/geocoding.service';

@Component({
  selector: 'app-test-geocoding',
  templateUrl: './test-geocoding.component.html',
  styleUrls: ['./test-geocoding.component.scss']
})
export class TestGeocodingComponent implements OnInit {
  text: string;
  datas: any ;
  results: string[] ;

  constructor(private geocodingService: GeocodingService) { }

  ngOnInit() {
    this.results=[];
  }


  search(event) {
      this.geocodingService.getGeocode(event.query).subscribe(data => {
          const tmp:string[]=[];
          this.datas = data;
          
          data.features.forEach(feature => {
            console.log(feature.properties.label);
            tmp.push(feature.properties.label);
          });
          this.results=tmp;
      });
      console.log(this.results);
  }

  handleDropdown(event) {
    event.query = this.results ;
}

}
