import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../../services/helper';

interface WeeklyMetrics {
  username: string;
  fastingSugar: number;
  postEatingSugar: number;
  hba1c: number;
  bmi: number;
  pefr: number;
  date: string;
}


@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  username: string = ''; // Initialize with an empty string
  weeklyMetricsList: WeeklyMetrics[] = []; // Initialize an empty array

  fastingSugar: number = 0;
  postEatingSugar: number = 0;
  hba1c: number = 0;
  bmi: number = 0;
  pefr: number = 0;
  date: string = ''; // Add date property

  constructor(private http: HttpClient) {
    this.username = localStorage.getItem("username") || '';
  }

  ngOnInit(): void {
    this.getWeekly();
  }

  submitWeeklyMetrics(): void {
    // Get current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().slice(0, 10);
  
    const weeklyMetrics: WeeklyMetrics = {
      username: this.username,
      fastingSugar: this.fastingSugar,
      postEatingSugar: this.postEatingSugar,
      hba1c: this.hba1c,
      bmi: this.bmi,
      pefr: this.pefr,
      date: this.date // Assign current date
    };
  
    this.http.post<WeeklyMetrics[]>(`${baseUrl}/weekly`, weeklyMetrics)
      .subscribe(
        (response) => {
          console.log('Weekly metrics submitted successfully:', response);
        },
        (error) => {
          console.error('Error submitting weekly metrics:', error);
        }
      );
  }
  
  getWeekly() {
    this.http.get<WeeklyMetrics[]>(`${baseUrl}/weekly/${this.username}`)
      .subscribe(
        (response) => {
          console.log('Weekly metrics retrieved successfully:', response);
          this.weeklyMetricsList = response; // Assign response data to weeklyMetricsList
        },
        (error) => {
          console.error('Error retrieving weekly metrics:', error);
        }
      );
  }
}
