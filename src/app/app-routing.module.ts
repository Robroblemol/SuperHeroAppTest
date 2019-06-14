import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { LoginComponent } from './admin/login/login.component'

const routes: Routes = [
  {
    path:'', redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'characters',component:CharactersComponent,
  },
  {
    path:'login',component:LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
