import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  items: MenuItem[];

  constructor(private router : Router 
    
    ) { }

  ngOnInit() {
 
    this.items = [
      {
        label: 'logo', 
       
    },
      {
          label: 'Menu', routerLink: ['/menu'] , 
         
      },
      {
          label: 'Trajets' , routerLink: ['/trajets'] ,
         
      },
      {
          label: 'Inventaire', routerLink: ['/inventaire'] ,

      },
      {separator: true},
  ];
  }

  handleClick() :void {
  // alert("ok");
   this.router.navigate(['login']);

}
}
