import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

const routes: Routes = [
  { path:'',pathMatch:'full', redirectTo: '/home'},
  { path:'utilisateur/:id', component: UtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
