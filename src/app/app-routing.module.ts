import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { FormTrajetComponent } from './components/form-trajet/form-trajet.component';

const routes: Routes = [
  { path:'',pathMatch:'full', redirectTo: '/home'},
  { path:'utilisateur/:id', component: UtilisateurComponent},
  { path : 'form-trajet', component : FormTrajetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
