import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoginComponent} from "./components/login/login.component";
import {ContainerComponent} from "./components/container/container.component";
import {NewEventComponent} from "./components/new-event/new-event.component";
import {ParticipantRegisterComponent} from "./components/participant-register/participant-register.component";
import {ParticipantSearchComponent} from "./components/participant-search/participant-search.component";
import {AccountCreationComponent} from "./components/account-creation/account-creation.component";

const routes: Routes = [
  {
    path: 'main',
    component: ContainerComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'menu',
        component: MainMenuComponent
      },
      {
        path: 'event',
        children: [
          {
            path: 'new',
            component: NewEventComponent
          }
        ]
      },
      {
        path: 'participant',
        children: [
          {
            path: 'register',
            component: ParticipantRegisterComponent
          },
          {
            path: 'search',
            component: ParticipantSearchComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'registration',
    component: AccountCreationComponent
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
