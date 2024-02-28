import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../../services/helper';

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
  selector: 'app-nearest',
  templateUrl: './nearest.component.html',
  styleUrls: ['./nearest.component.css']
})
export class NearestComponent implements OnInit {
  
  loading: boolean = false;
  error: boolean = false;
  doctors: Doctor[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch user location from localStorage
    const city = localStorage.getItem('city');
    const state = localStorage.getItem('state');
    const country = localStorage.getItem('country');

    if (city && state && country) {
      this.fetchNearestDoctors(city, state, country);
    } else {
      this.error = true;
    }
  }

  fetchNearestDoctors(city: string, state: string, country: string): void {
    this.loading = true;
    this.http.get<Doctor[]>(`${baseUrl}/match-location/${city}/${state}/${country}`)
      .subscribe(
        (response) => {
          console.log(response);
          this.doctors = response; // Assign response to this.doctors
          localStorage.setItem("docName", this.doctors[0].docName); // Set docName based on the response
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching nearest doctors:', error);
          this.error = true;
          this.loading = false;
        }
      );
  }
  

}
