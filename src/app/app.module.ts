import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { TrajetComponent } from './components/trajet/trajet.component';
import { TrajetsComponent } from './components/trajets/trajets.component';

import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutoCompleteModule} from 'primeng/autocomplete';

import { CarteStatiqueComponent } from './Components/carte-statique/carte-statique.component';
import { MenuProfilComponent } from './components/menu-profil/menu-profil.component';
import { ProfilComponent } from './components/profil/profil.component';
import { TestGeocodingComponent } from './components/test-geocoding/test-geocoding.component';
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    TrajetComponent,
    TrajetsComponent,
    CarteStatiqueComponent,
    MenuProfilComponent,
    ProfilComponent,
    TestGeocodingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    MenuModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
