import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions, ChartType, Color } from 'chart.js'; // Adjusted



import baseUrl from '../../services/helper';

interface WeeklyMetrics {
  date: string;
  fastingSugar: number;
  postEatingSugar: number;
  hba1c: number;
  bmi: number;
  pefr: number;
}

@Component({
  selector: 'app-weekly-graph',
  templateUrl: './weekly-graph.component.html',
  styleUrls: ['./weekly-graph.component.css']
})
export class WeeklyGraphComponent implements OnInit {

  username: string = ''; // Initialize with an empty string
  weeklyMetricsList: WeeklyMetrics[] = [];

  // Chart data
  lineChartData: ChartDataset[] = [];
  lineChartLabels: string[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: any[] = [
    {
      backgroundColor: 'rgba(255,255,0,0.28)',
      borderColor: 'black',
      borderWidth: 1,
      fill: false
    },
  ];
  
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor(private http: HttpClient) {
    this.username = localStorage.getItem("username") || '';
  }

  ngOnInit(): void {
    this.getWeeklyData();
  }

  getWeeklyData(): void {
    this.http.get<WeeklyMetrics[]>(`${baseUrl}/weekly/${this.username}`)
      .subscribe(
        (response) => {
          console.log('Weekly metrics retrieved successfully:', response);
          this.weeklyMetricsList = response;
          this.prepareChartData();
        },
        (error) => {
          console.error('Error retrieving weekly metrics:', error);
        }
      );
  }

  prepareChartData(): void {
    this.lineChartData = [
      { data: this.weeklyMetricsList.map(metric => metric.fastingSugar), label: 'Fasting Sugar' },
      { data: this.weeklyMetricsList.map(metric => metric.postEatingSugar), label: 'Post-Eating Sugar' },
      { data: this.weeklyMetricsList.map(metric => metric.hba1c), label: 'HbA1c' },
      { data: this.weeklyMetricsList.map(metric => metric.bmi), label: 'BMI' },
      { data: this.weeklyMetricsList.map(metric => metric.pefr), label: 'PEFR' },
    ];
    this.lineChartLabels = this.weeklyMetricsList.map(metric => metric.date);
  }

}
