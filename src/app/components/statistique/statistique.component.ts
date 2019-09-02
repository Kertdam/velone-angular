import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/app/models/statistique/statistique.model';
import { StatistiqueService } from 'src/app/_services/statistique/statistique.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  id : number ;
  statistique: any ;
  data: any;
  myData: Array<any> = [];
  stat: Statistique[];
  //stat: Statistique = new Statistique();

   constructor(private statService: StatistiqueService  , private route: ActivatedRoute) {
 
 }
    
 ngOnInit() {
   this.id = Number(this.route.snapshot.paramMap.get('id'));
   this.statService.getStatistiqueByMembreId(this.id).subscribe(res => {
     this.statistique = res;
     console.log(this.statService);
     console.log(this.statistique);
     console.log(this.statistique.temptrajet , this.statistique.distance, this.statistique.vitessemoyenne );
     res.forEach( element => {
      // element.vitesseMoyenne = this.stat;
     });
     this.stat = res;
     console.log(res);
   }, err => {
     console.log(err);
   });
 }

}
