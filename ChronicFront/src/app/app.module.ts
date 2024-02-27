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
<<<<<<< HEAD
import { Dashboard1Component } from './pages/dashboard1/dashboard1.component';
=======
import { AboutusComponent } from './aboutus/aboutus.component';
>>>>>>> 20d302d4abebb844bdfc45a8682ffbc8764a5e76


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SignUpComponent,
    KnowMoreComponent,
    LoginComponent,
<<<<<<< HEAD
    Dashboard1Component
=======
    AboutusComponent
>>>>>>> 20d302d4abebb844bdfc45a8682ffbc8764a5e76
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
