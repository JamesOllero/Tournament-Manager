import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoginComponent} from "./components/login/login.component";
import { ParticipantRegisterComponent } from './components/participant-register/participant-register.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainMenuComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
