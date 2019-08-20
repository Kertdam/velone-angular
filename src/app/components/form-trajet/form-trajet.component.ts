import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-trajet',
  templateUrl: './form-trajet.component.html',
  styleUrls: ['./form-trajet.component.scss']
})
export class FormTrajetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value.titre);
    console.log(form.value.desc);
    console.log(form.value.date);
  }

}
