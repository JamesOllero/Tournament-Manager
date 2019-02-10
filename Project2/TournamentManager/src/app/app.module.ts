import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AccountCreationComponent } from './components/account-creation/account-creation.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { ParticipantRegisterComponent } from './components/participant-register/participant-register.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContainerComponent } from './components/container/container.component';
import { ParticipantSearchComponent } from './components/participant-search/participant-search.component';
<<<<<<< HEAD
<<<<<<< master
import { SearchUtilPipe } from "./pipes/search-util.pipe";
=======
>>>>>>> Code Update
=======
>>>>>>> Joe

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountCreationComponent,
    MainMenuComponent,
    NewEventComponent,
    ParticipantRegisterComponent,
    NavigationComponent,
    ContainerComponent,
<<<<<<< HEAD
<<<<<<< master
    ParticipantSearchComponent,
    SearchUtilPipe
=======
    ParticipantSearchComponent
>>>>>>> Code Update
=======
    ParticipantSearchComponent
>>>>>>> Joe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
