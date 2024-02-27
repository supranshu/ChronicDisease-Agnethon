import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import baseUrl from '../../services/helper';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  ngOnInit(): void {
    localStorage.clear();
  }

  selectedRole: string = 'User'; // Default value
  formData: any = {}; // Object to hold form data

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showFields(event: Event): void {
    this.selectedRole = (event.target as HTMLSelectElement).value;
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.selectedRole === 'User') {
      this.submitUserForm();
    } else if (this.selectedRole === 'Doctor') {
      this.submitDoctorForm();
    }
  }

  // Method to submit user form
  submitUserForm(): void {
    this.http.post<any>(`${baseUrl}/user-signup`, this.formData)
      .subscribe(response => {
        console.log('User signup successful:', response);
        // Redirect or show success message
      }, error => {
        console.error('Error signing up user:', error);
        this.openSnackBar('Error signing up user: ' + error.message);
      });
  }

  // Method to submit doctor form
  submitDoctorForm(): void {
    this.http.post<any>(`${baseUrl}/doctor-signup`, this.formData)
      .subscribe(response => {
        console.log('Doctor signup successful:', response);
        // Redirect or show success message
      }, error => {
        console.error('Error signing up doctor:', error);
        this.openSnackBar('Error signing up doctor: ' + error.message);
      });
  }

  // Method to open MatSnackBar
  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000 // Duration in milliseconds (3 seconds)
    });
  }
}
