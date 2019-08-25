import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { TrajetComponent } from './components/trajet/trajet.component';

const routes: Routes = [
  //{ path:'home', component: UtilisateurComponent },
  //{ path:'',pathMatch:'full', redirectTo: '/home'},
  { path:'utilisateur/:id', component: UtilisateurComponent },
  { path:'trajet/:id', component: TrajetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
