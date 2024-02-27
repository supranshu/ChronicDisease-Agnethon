import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

=======
>>>>>>> ea3c415467c0fa0341e683a7b61dd1203236e73f
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { KnowMoreComponent } from './pages/know-more/know-more.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Dashboard1Component } from './pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { ContactComponent } from './pages/contact/contact.component';

<<<<<<< HEAD
=======




 

>>>>>>> ea3c415467c0fa0341e683a7b61dd1203236e73f
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    KnowMoreComponent,
    LoginComponent,
    AboutusComponent,
    Dashboard1Component,
    Dashboard2Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
