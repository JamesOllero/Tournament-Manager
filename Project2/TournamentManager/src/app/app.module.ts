import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AccountCreationComponent } from './components/account-creation/account-creation.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { ParticipantRegisterComponent } from './components/participant-register/participant-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountCreationComponent,
    MainMenuComponent,
    NewEventComponent,
    ParticipantRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
