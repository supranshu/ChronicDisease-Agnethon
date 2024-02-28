import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import baseUrl from '../../services/helper';
import e from 'express';

interface User {
  fullname: string;
  age: number;
  email: string;
  phoneNo: string;
  disease: string;
  gender: string;
  weight: string;
  height: string;
  bloodPressure: string;
  bmi: string;
  hba1c: string;
  sugar: string;
  city: string;
  state: string;
  country: string;
}

interface Doctor {
  docName: string;
  speciality: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  phoneNo:string;
}
@Component({
  selector: 'app-docdashboard',
  templateUrl: './docdashboard.component.html',
  styleUrl: './docdashboard.component.css',
})
export class DocdashboardComponent implements OnInit {
  users: User[] = [];
  doctors: Doctor[] = [];
  email = localStorage.getItem('email');
  docName = localStorage.getItem('docName');
  ngOnInit(): void {
    this.getAllUsers();
  }

  constructor(private http: HttpClient) {}

  getAllUsers() {
    this.http.get<User[]>(`${baseUrl}/all-users`).subscribe(
        (data) => {
            console.log(data); // Log the API response data
            this.users = data; // Assign the data to the users array
        },
        (error) => {
            console.log(error);
        }
    );
}

fetchDoctors(city: string, state: string, country: string): void 
{
  
  this.http.get<Doctor[]>(`${baseUrl}/all-doctors`)
    .subscribe(
      (response) => {
        console.log(response);
        this.doctors = response;
        
      },
      (error) => {
        console.error('Error fetching  doctors:', error);
        
        
      }
    );
}
fetchDName(docName: string): void {
  
  this.http.get<Doctor[]>(`${baseUrl}/all-doctors/${this.email}`)
    .subscribe(
      (response) => {
        console.log(response);
        this.doctors = response;
        
      },
      (error) => {
        console.error('Error fetching  doctors:', error);
        
        
      }
    );
    }}
