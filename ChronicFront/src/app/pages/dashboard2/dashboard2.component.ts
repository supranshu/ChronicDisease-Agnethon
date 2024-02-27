import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.css'
})
export class Dashboard2Component {
  getCurrentTime(): string {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const meridian = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Convert single-digit hours to 2-digit format
    const hoursStr = hours.toString().padStart(2, '0');

    return `${hoursStr}:${minutes} ${meridian}`;
  }

  api_key: string = 'AIzaSyCTSQi9GlqidQ8Vev11U0N-8ztSQrDeuuM'; // Assign your API key here
  prompt: string = ''; // Initialize with user's prompt
  response: string = ''; // Store the response from the Gemini bot

  constructor(private http: HttpClient) { }

  getGeminiBotResponse() {
    const url = 'https://api.gemini.com/v1/bot';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.api_key}`,
      'Content-Type': 'application/json'
    });

    const data = {
      prompt: this.prompt
    };

    this.http.post<any>(url, data, { headers }).subscribe(
      (res) => {
        this.response = res.response; // Store the response
      },
      (error) => {
        console.error('Error:', error);
        this.response = 'Error: Unable to get response from Gemini bot'; // Handle error
      }
    );
  }
}
