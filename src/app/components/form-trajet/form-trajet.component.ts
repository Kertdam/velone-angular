import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Trajet } from 'src/app/models/trajet/trajet.model';
import { TrajetService } from 'src/app/_services/trajet/trajet.service';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-trajet',
  templateUrl: './form-trajet.component.html',
  styleUrls: ['./form-trajet.component.scss']
})
export class FormTrajetComponent implements OnInit {


  trajetForm = this.fb.group({
    nomCtrl : [''],
    descCtrl: [''],
    dateCtrl: ['']
  });

  constructor(private fb: FormBuilder, private trajetService: TrajetService, private datePipe: DatePipe) {

  }

  ngOnInit() {
  }

  handleSubmit() {
    console.log(this.trajetForm.value);
    let trajet: Trajet = new Trajet();
    trajet.nom = this.trajetForm.value.nomCtrl;
    trajet.description = this.trajetForm.value.descCtrl;
    trajet.dateDepart = this.trajetForm.value.dateCtrl;
    trajet.dateDepart = this.transformDate(trajet.dateDepart);
    console.log(trajet.dateDepart);
    trajet.utilisateur = new Utilisateur();
    trajet.utilisateur.id = 1;
    this.trajetService.addTrajet(trajet).subscribe( res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss ');
  }

}
