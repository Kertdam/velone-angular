import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-profil',
  templateUrl: './menu-profil.component.html',
  styleUrls: ['./menu-profil.component.scss']
})
export class MenuProfilComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
      this.items = [
          {label: 'Mon profil', icon: 'pi pi-fw pi-user', routerLink: ['/profil/utilisateur/1']},
          {label: 'Mes trajets', icon: 'pi pi-fw pi-compass', routerLink: ['/profil/trajets']},
          {label: 'Mes paritcipations', icon: 'pi pi-fw pi-directions'},
          {label: 'Mes Amis', icon: 'pi pi-fw pi-users'}
      ];
  }

}
