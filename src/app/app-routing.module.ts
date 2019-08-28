import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { TrajetComponent } from './components/trajet/trajet.component';
import { TrajetsComponent } from './components/trajets/trajets.component';
import { ProfilComponent } from './components/profil/profil.component';


const routes: Routes = [
  //{ path:'home', component: UtilisateurComponent },
  //{ path:'',pathMatch:'full', redirectTo: '/home'},
  { path: 'utilisateur/:id', component: UtilisateurComponent },
  { path: 'trajets', component: TrajetsComponent },
  { path: 'trajet/:id', component: TrajetComponent },
  {path: 'login', component: LoginFormComponent},
  { path: 'profil', component: ProfilComponent, children: [
    {
        path: 'utilisateur/:id',
        component: UtilisateurComponent
    },
    {
        path: 'trajets',
        component: TrajetsComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
