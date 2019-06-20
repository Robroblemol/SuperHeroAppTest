import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { LoginComponent } from './admin/login/login.component'
import { AuthGuard } from './auth/guard/auth.guard';
import { SecureInnerPagesGuard } from './auth/guard/secure-inner-pages.guard';
import { RegisterComponent } from './admin/register/register.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'characters',
    component:CharactersComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[SecureInnerPagesGuard],
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[SecureInnerPagesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
