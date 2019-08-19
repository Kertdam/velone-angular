import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/_services/utilisateur/utilisateur.service';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  id : number ;
  utilisateur: Utilisateur ;

  constructor(private utilisateurService: UtilisateurService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.utilisateurService.getUserById(this.id).subscribe(res => {
      this.utilisateur = res;
      console.log(this.utilisateur);
    }, err => {
      console.log(err);
    });
  }

}
