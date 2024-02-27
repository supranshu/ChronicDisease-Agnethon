import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { KnowMoreComponent } from './pages/know-more/know-more.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SignUpComponent,
    KnowMoreComponent,
    LoginComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, MatSnackBarModule, HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
