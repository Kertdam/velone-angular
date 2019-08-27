import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-trajet',
  templateUrl: './form-trajet.component.html',
  styleUrls: ['./form-trajet.component.scss']
})
export class FormTrajetComponent implements OnInit {

  nomTrajetCtrl : FormControl
  trajetForm: FormGroup;

  constructor(fb: FormBuilder) { 

    this.trajetForm = fb.group( {

      nomTrajet: this.nomTrajetCtrl
    });
    this.nomTrajetCtrl = fb.control('')
  }


  ngOnInit() {
  }

  handleSubmit() {

  }

}
