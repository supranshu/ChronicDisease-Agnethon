import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import baseUrl from '../../services/helper';

@Component({
  selector: 'app-docdashboard',
  templateUrl: './docdashboard.component.html',
  styleUrl: './docdashboard.component.css',
})
export class DocdashboardComponent implements OnInit {
  ngOnInit(): void {
    this.getAllUsers();
  }

  constructor(private http: HttpClient) {}

  getAllUsers() {
    this.http.get(`${baseUrl}/all-users`).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
