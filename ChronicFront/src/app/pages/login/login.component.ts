import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import baseUrl from '../../services/helper';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginData={
    email:"",
    password:""
  }
  constructor(private http:HttpClient, private router:Router){}

  public doLogin(){
    this.http.get(`${baseUrl}/user-login/${this.loginData.email}/${this.loginData.password}`).subscribe(
      (response)=>{
        console.log("login")
      }
    )
  }

}
