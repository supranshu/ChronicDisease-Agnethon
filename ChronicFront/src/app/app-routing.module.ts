import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

import { KnowMoreComponent } from './pages/know-more/know-more.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Dashboard1Component } from './pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Dashboard3Component } from './pages/dashboard3/dashboard3.component';
import { DocdashboardComponent } from './pages/docdashboard/docdashboard.component';
import { NearestComponent } from './pages/nearest/nearest.component';

import { WeeklyComponent } from './pages/weekly/weekly.component';
import { WeeklyGraphComponent } from './pages/weekly-graph/weekly-graph.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { SymptomsComponent } from './pages/symptoms/symptoms.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"signup",
    component:SignUpComponent,
    pathMatch:'full'
  },
  {
    path:"knowmore",
    component:KnowMoreComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"aboutus",
    component:AboutusComponent,
    pathMatch:'full'
  
  },
  {
    path:"dashboard1",
    component:Dashboard1Component,
    pathMatch:'full'
  },
  {
    path:"dashboard2",
    component:Dashboard2Component,
    pathMatch:'full'
  },
  {
    path:"contact",
    component:ContactComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard3',
    component:Dashboard3Component,
    pathMatch:'full'
  },
  {
    path:'docdashboard',
    component:DocdashboardComponent,
    pathMatch:'full'
  },
  {
    path:"nearest",
    component:NearestComponent,
    pathMatch:'full'
  },
  {
    path:'weekly',
    component:WeeklyComponent,
    pathMatch:'full'
  },
  {
    path:'weekupdate',
    component:WeeklyGraphComponent,
    pathMatch:'full'
  },
  {
    path:'appointment',
    component:AppointmentComponent,
    pathMatch:'full'
  },
  {
    path:"symptoms",
    component:SymptomsComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
