import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { TrajetComponent } from './components/trajet/trajet.component';
import { TrajetsComponent } from './components/trajets/trajets.component';

import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarteStatiqueComponent } from './Components/carte-statique/carte-statique.component';
import { MenuProfilComponent } from './components/menu-profil/menu-profil.component';
import { ProfilComponent } from './components/profil/profil.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import {MenubarModule} from 'primeng/menubar';

import {TabMenuModule} from 'primeng/tabmenu';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

import { FormTrajetComponent } from './components/form-trajet/form-trajet.component';
import { MembreTrajetsComponent } from './components/membre-trajets/membre-trajets.component';
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    TrajetComponent,
    TrajetsComponent,
    CarteStatiqueComponent,
    MenuProfilComponent,
    ProfilComponent,
    MenuComponent,
    LoginFormComponent
    FormTrajetComponent,
    MembreTrajetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabMenuModule,
    SplitButtonModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    CardModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
