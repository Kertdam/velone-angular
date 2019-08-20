import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { TrajetComponent } from './components/trajet/trajet.component';
import { FormTrajetComponent } from './components/form-trajet/form-trajet.component';


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    TrajetComponent,
    FormTrajetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextareaModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
