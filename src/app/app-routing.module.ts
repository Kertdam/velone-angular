import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { TrajetComponent } from './components/trajet/trajet.component';
import { TrajetsComponent } from './components/trajets/trajets.component';
import { ProfilComponent } from './components/profil/profil.component';
import { MembreTrajetsComponent } from './components/membre-trajets/membre-trajets.component';
import { FormTrajetComponent } from './components/form-trajet/form-trajet.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';

const routes: Routes = [
  //{ path:'home', component: UtilisateurComponent },
  //{ path:'',pathMatch:'full', redirectTo: '/home'},
  { path: 'utilisateur/:id', component: UtilisateurComponent },
  { path: 'trajets', component: TrajetsComponent },
  { path: 'trajet/:id', component: TrajetComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'form-trajet', component: FormTrajetComponent },
  { path: 'membre-trajets/:id', component: MembreTrajetsComponent },
  { path: 'statistiques', component: StatistiqueComponent},
  { path: 'statistiques/membreId/:id', component: StatistiqueComponent},
  { path: 'statistiques/:id', component: StatistiqueComponent},
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
