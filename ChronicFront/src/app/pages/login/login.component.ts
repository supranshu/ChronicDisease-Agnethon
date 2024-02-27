import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import baseUrl from '../../services/helper';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    localStorage.clear();
  }
  public loginData={
    email:"",
    password:""
  }

  constructor(private http: HttpClient, private router: Router, private snack: MatSnackBar) {}

  public doLoginU() {
    console.log("login clicked")
    this.http.get<any>(`${baseUrl}/user-login/${this.loginData.email}/${this.loginData.password}`).subscribe(
      (response) => {
        

        localStorage.setItem('age', response.age.toString());
        localStorage.setItem('city', response.city);
        localStorage.setItem('country', response.country);
        localStorage.setItem('email', response.email);
        localStorage.setItem('phoneNo', response.phoneNo);
        localStorage.setItem('state', response.state);
        localStorage.setItem('username', response.username);

        
        this.snack.open("Login successful!!!", '', { duration: 3000 })
        this.router.navigateByUrl("/dashboard1")
      },
      (error) => {
        this.snack.open("Something is wrong!!!", '', { duration: 3000 })
      }
    )
  }

  public doLoginD() {
    this.http.get<any>(`${baseUrl}/doctor-login/${this.loginData.email}/${this.loginData.password}`).subscribe(
      (response) => {
        console.log(response)
        this.snack.open("Login successful!!!", '', { duration: 3000 })
        this.router.navigateByUrl("/docdashboard")
      },
      (error) => {
        console.log(error)
        this.snack.open("Something is wrong!!!", '', { duration: 3000 })
      }
    )
  }

}
