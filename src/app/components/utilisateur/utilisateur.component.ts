import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/_services/utilisateur/utilisateur.service';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs: Utilisateur[] ;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurService.getUsers().subscribe(res => {
      this.utilisateurs = res;
      console.log(this.utilisateurs);
    }, err => {
      console.log(err);
    });
  }

}
