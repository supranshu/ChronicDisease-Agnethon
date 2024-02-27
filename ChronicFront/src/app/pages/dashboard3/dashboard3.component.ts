import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component {
  age: string = localStorage.getItem('age') || '';
  city: string = localStorage.getItem('city') || '';
  country: string = localStorage.getItem('country') || '';
  disease: string = localStorage.getItem('disease') || '';
  email: string = localStorage.getItem('email') || '';
  height: string = localStorage.getItem('height') || '';
  hypertensionBloodPressure: string = localStorage.getItem('hypertensionBloodPressure') || '';
  phoneNo: string = localStorage.getItem('phoneNo') || '';
  state: string = localStorage.getItem('state') || '';
  username: string = localStorage.getItem('username') || '';
  weight: string = localStorage.getItem('weight') || '';

  constructor() { }
}