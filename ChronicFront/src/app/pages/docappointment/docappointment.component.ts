import { Component, OnInit} from '@angular/core';
import baseUrl from '../../services/helper';
import { HttpClient } from '@angular/common/http';
interface Doctor {
  docName: string;
  speciality: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
 
}
@Component({
  selector: 'app-docappointment',
  templateUrl: './docappointment.component.html',
  styleUrl: './docappointment.component.css'
})
export class DocappointmentComponent {
  docName = localStorage.getItem('docName');
  email = localStorage.getItem('email');
  doctors: Doctor[] = [];

  constructor(private http: HttpClient) {}
  fetchDoctors(city: string, state: string, country: string): void 
{
  
  this.http.get<Doctor[]>(`${baseUrl}/all-doctors`)
    .subscribe(
      (response) => {
        console.log(response);
        this.doctors = response;
        
      },
      (error: any) => {
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
        (error: any) => {
          console.error('Error fetching  doctors:', error);
          
          
        }
      );
      }
}
